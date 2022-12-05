const UrlParser = {
  parserActiveUrl() {
    const url = window.location.pathname;
    return this._urlSplitter(url);
  },

  parserActiveUrlEdit() {
    const url = window.location.pathname;
    return this._urlSplitterEdit(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
    };
  },

  _urlSplitterEdit(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      idPatungan: urlsSplits[2] || null,
      idEdit: urlsSplits[3] || null,

    };
  },
};

export default UrlParser;
