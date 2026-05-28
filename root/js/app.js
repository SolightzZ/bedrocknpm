const urlParams = new URLSearchParams(window.location.search);
let idElm = (v, e = moduleElms) => e.querySelector('#' + v);
let moduleLoadedCount = 0;

moduleNames.map((moduleName) => {
    let package = NAMESPACE + '/' + moduleName;
    let url = BASE_URL + package;
    let npmBase = 'npm i ' + package + '@';

    let moduleElm = elm();
    moduleElm.setAttribute('id', moduleName);
    let { classList } = moduleElm;
    classList.add('loading');
    let head = elm('div');
    head.className = 'module-name';
    head.style.cursor = 'pointer';

    head.innerText = moduleName;

    let fetching = false;

    moduleElm.onclick = async function run() {
        if (fetching) return;

        fetching = true;

        classList.add('loading');

        let json = await fetchJson(url, {
            Accept: 'application/vnd.npm.install-v1+json',
        });

        classList.remove('loading');
        moduleLoadedCount++;
        if (moduleLoadedCount === moduleNames.length) {
            document.body.classList.remove('loading');
        }
        if (!json) {
            fetching = false;
            popup(url, 'Response error');
            return;
        }

        let { modified, versions } = json;

        let modifiedElm = elm('div');
        modifiedElm.className = 'update-info';
        modifiedElm.innerText = 'Update ' + readableDate(new Date(modified));
        head.append(modifiedElm);

        appendVersion(moduleElm, versions, npmBase);

        let c = urlParams.get('copy');
        if (c) idElm(cleanId(c), moduleElm)?.click();
    };

    moduleElm.append(head);
    moduleElms.append(moduleElm);
});

delay(2000).then(fetchAll);

urlParams.getAll('fetch').forEach(async (v) => {
    let m = idElm(v);
    m.click();
});

async function fetchGameVersion() {
    let subtitle = document.getElementById('game-version');
    if (!subtitle) return;
    try {
        let res = await fetch(
            'https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json',
        );
        let json = await res.json();
        let stable = json.windows.stable;
        await delay(2000);
        subtitle.innerText = 'Minecraft Bedrock ver: ' + stable + ' (Latest)';
        subtitle.classList.remove('loading');
    } catch (e) {
        console.error('Failed to fetch game version', e);
        subtitle.innerText = 'Minecraft Bedrock ver: Error';
        subtitle.classList.remove('loading');
    }
}
fetchGameVersion();

async function handleTitleLoading() {
    let title = document.getElementById('main-title');
    if (!title) return;
    await delay(3000);
    title.classList.remove('loading');
}
handleTitleLoading();
