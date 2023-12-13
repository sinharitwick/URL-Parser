function parseURLComponents(url) {
    const parser = document.createElement('a');
    parser.href = url;

    return {
        scheme: parser.protocol.replace(':', ''),
        domain: parser.hostname,
        path: parser.pathname,
        query_params: parseQueryParams(parser.search),
        fragment: parser.hash.replace('#', '')
    };
}

function parseQueryParams(queryString) {
    const params = {};
    const searchParams = new URLSearchParams(queryString);
    for(const [key, value] of searchParams) {
        params[key] = value;
    }
    return params;
}

function parseURL() {
    const urlInput = document.getElementById('urlInput').value;
    const parsedURL = parseURLComponents(urlInput);

    const resultList = document.getElementById('resList');
    resultList.innerHTML = '';

    for (const [key, value] of Object.entries(parsedURL)) {
        const listItem = document.createElement('li');
        if (key === 'query_params') {
            listItem.innerHTML = `<strong>${key}:</strong> ${JSON.stringify(value)}`;
        } else {
            listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
        }
        resultList.appendChild(listItem);
    }

    const resContainer = document.getElementById('resContainer');
    resContainer.style.display = 'block';
}