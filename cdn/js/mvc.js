window.mvc ? null : (window.mvc = {});

window.mvc.m ? null : (window.mvc.m = model = {
    error: {
        image: e=>{
            console.log('model.error.image', e);
            e.remove();
        }
    }
});

window.mvc.v ? null : (window.mvc.v = view = function(route) {
    console.log(108, {
        route
    });

    return new Promise(async function(resolve, reject) {
        var page = route.page;
        var path = route.path;
        var gut = route.hash ? rout.ed.dir(route.hash.split('#')[1]) : [];
        var get = (route ? route.GOT : rout.ed.dir(dom.body.dataset.path)).concat(gut);
        var root = get[0] || gut[0];

        window.GET = window.GET ? GET : rout.ed.dir(dom.body.dataset.path);

        controller.nav.close();

        if (root) {

            if (root === "dashboard") {
                if (get.length > 1) {
                    const title = get[1];
                    dom.body.find('main > nav [placeholder]').textContent = title;
                }
                resolve(route);
            } else if (root === "setup") {
                var vp = dom.body.find('[data-pages="/setup/"]');
                if (get.length > 1) {
                    vp.all('block[data-step]')[0].find('input[type="text"]').value = get[1];
                    vp.all('block[data-step]')[0].find('[data-goto="two"]').classList.remove('opacity-50pct');
                    vp.all('block[data-step]')[0].find('[data-goto="two"]').dataset.disabled = "false";
                    if (get.length > 2) {
                        if (get.length > 3) {
                            $(vp.all('block[data-step]')).addClass('display-none');
                            $(vp.all('block[data-step]')[2]).removeClass('display-none');
                        } else {
                            $(vp.all('block[data-step]')).addClass('display-none');
                            $(vp.all('block[data-step]')[1]).removeClass('display-none');
                        }
                    } else {
                        $(vp.all('block[data-step]')).addClass('display-none');
                        $(vp.all('block[data-step]')[0]).removeClass('display-none');
                    }
                } else {
                    $(vp.all('block[data-step]')).addClass('display-none');
                    $(vp.all('block[data-step]')[0]).removeClass('display-none');
                }
            } else {
                resolve(route);
            }

        } else {

            resolve(route);

        }
    }
    );
}
);

window.mvc.c ? null : (window.mvc.c = controller = {

    menu: {

        close: ()=>{

            const nav = dom.body.find('body > nav');
            nav.dataset["960pxTransform"] = "translateX(-100%)";
            nav.firstElementChild.classList.add('display-none');

        }
        ,

        open: ()=>{

            const nav = dom.body.find('body > nav');
            nav.dataset["960pxTransform"] = "0";
            nav.firstElementChild.classList.remove('display-none');

        }

    },

    nav: {

        close: ()=>{

            const nav = document.body.find('body > main > nav');
            const transform = nav.dataset["960pxTransform"];
            const blocks = dom.body.find('main > pages');

            nav.dataset["960pxTransform"] = "translateX(-100%)";
            blocks.dataset["960pxTransform"] = "0";

        }
        ,

        toggle: (target)=>{

            const nav = document.body.find('body > main > nav');
            const transform = nav.dataset["960pxTransform"];
            const blocks = dom.body.find('main > pages');

            if (transform === "translateX(-100%)") {
                nav.dataset["960pxTransform"] = "translateX(0)";
                blocks.dataset["960pxTransform"] = "translateX(280px)";
            } else {
                nav.dataset["960pxTransform"] = "translateX(-100%)";
                blocks.dataset["960pxTransform"] = "0";
            }

        }
        ,

    },

    sign: {

        in: (event,f)=>{
            event.preventDefault();
            auth.account.login(event).then(e=>(f ? f : '/').router()).catch(e=>{
                var code = e.code;
                var message = e.message;
                alert(message);
            }
            );
        }

    }

});
