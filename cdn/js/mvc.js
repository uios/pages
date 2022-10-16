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

        if (root) {

            if (root === "dashboard") {
                resolve(route);
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
            console.log(nav.dataset);
            nav.dataset["960pxTransform"] = "0";
            nav.firstElementChild.classList.remove('display-none');

        }

    },

    my: {

        login: (event,f)=>{
            event.preventDefault();
            auth.account.login(event).then(e=>(f ? f : '/').router()).catch(e=>{
                var code = e.code;
                var message = e.message;
                alert(message);
            }
            );
        }

    },

    plans: {

        compare: (target)=>{

            var cycle = target.closest('[data-before]').dataset.before;

            if (cycle) {
                const blocks = target.closest('blocks');
                const block = blocks.children[2];
                const card = target.closest('card');
                if (cycle === "monthly") {
                    card.firstElementChild.dataset.transform = "translateX(0)";
                    $(block.all('card text span:nth-child(2)')).attr('data-display', 'none');
                    $(block.all('card text span:nth-child(1)')).attr('data-display', 'flex');
                } else if (cycle === "yearly") {
                    card.firstElementChild.dataset.transform = "translateX(100%)";
                    $(block.all('card text span:nth-child(1)')).attr('data-display', 'none');
                    $(block.all('card text span:nth-child(2)')).attr('data-display', 'flex');
                }
                card.find('[data-color]').removeAttribute('data-color');
                target.dataset.color = "#fff";
            }

        }
        ,

        period: (target)=>{

            var cycle = target.closest('[data-before]');
            if (cycle) {
                const card = target.closest('card');
                const section = target.closest('header').nextElementSibling;
                if (cycle.dataset.before === "monthly") {
                    card.firstElementChild.dataset.transform = "translateX(0)";
                    $(section.all('box > :last-child > :nth-child(1)')).removeClass('display-none');
                    $(section.all('box > :last-child > :nth-child(2)')).addClass('display-none');
                }
                if (cycle.dataset.before === "yearly") {
                    card.firstElementChild.dataset.transform = "translateX(100%)";
                    $(section.all('box > :last-child > :nth-child(1)')).addClass('display-none');
                    $(section.all('box > :last-child > :nth-child(2)')).removeClass('display-none');
                }
                card.find('[data-color]').removeAttribute('data-color');
                target.dataset.color = "#fff";
            }

        }
        ,

        select: (target)=>{
            const index = target.closest('box').index();
            const plan = target.closest('block').find('block > section').all('box')[index];
            const type = plan.find('text b').textContent;
        }
        ,

        view: (target)=>{

            const index = target.closest('box').index();

            const plan = target.closest('block').find('block > section').all('box')[index];
            if (plan) {
                const row = plan.parentNode;

                const plans = $(row.all('box'));
                plans.attr("data-height", "120px");
                plans.attr("data-width", "120px");
                $(plan.parentNode.all('box > picture + column')).addClass("display-none");
                const type = plan.find('text b').textContent;

                $(plan.all('picture + column')).removeClass("display-none");
                plan.dataset.height = "240px";
                plan.dataset.width = "240px";

                const index = plan.index();
                row.dataset.tabletTransform = "translateX(calc((-100%/3)*" + index + "))";

                const backgroundColor = plan.firstElementChild.dataset.backgroundColor;
                row.closest('block').find('header').children[1].firstElementChild.dataset.backgroundColor = backgroundColor;
                row.closest('block').firstElementChild.dataset.backgroundColor = backgroundColor;

                const footer = row.closest('block').find('footer');
                if (footer) {
                    const bullets = $(footer.all('box'));
                    const bullet = bullets[index];
                    const button = bullet.find('flex');
                    $(footer.all('box flex')).addClass('display-none');
                    $(footer.all('box')).attr('data-width', '50px');
                    button.classList.remove('display-none');
                    button.closest('box').dataset.width = "120px";
                }
            }

        }

    }

});
