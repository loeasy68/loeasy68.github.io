function jelluy()
{
  const self = {
    startSite: (body, head) => {
        var element1 = document.querySelector('body');
        element1.innerHTML = body;
        var element2 = document.querySelector("head")
        element2.innerHTML = element2.innerHTML + head;
    },
    renderPage: (body,head) => {
        var element1 = document.querySelector('body');
        element1.innerHTML = body;
        var element2 = document.querySelector('head');
        element2.innerHTML = element2.innerHTML + head;
    },
    addLine: (body, head) => {
        var element1 = document.querySelector('body');
        var element2 = document.querySelector('head');
        element1.innerHTML = element1.innerHTML + body;
        element2.innerHTML = element2.innerHTML + head;
    },
    appsView: (html) => {
        var menu = document.getElementById("options")
        menu.innerHTML = html;
    },
  };

  return self;
}
