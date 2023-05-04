let position = 0;

setInterval(()=> {
    window.scrollTo(0, position+=1000)    
    reaction();
}, 5000)



function reaction() {
    var filter   = Array.prototype.filter
    const article = document.querySelectorAll("article")
    const filtered = filter.call( article , function( node ) {
        return !!node.querySelectorAll('a[href="/optimismFND"]').length;
    });
    filtered.forEach(post => {
      rewit(post);
      like(post);
    });
}


function rewit(post){
    const btn = post.querySelector('div[data-testid="retweet"]');
    if (btn) {
        btn.click();
        setTimeout(()=> {
            const cfRewit = document.querySelector('div[data-testid="retweetConfirm"]');
            cfRewit.click();
         }, 500);
    }
}


function like(post) {
    const btn = post.querySelector('div[data-testid="like"]');
     if (btn) {
        btn.click();
     }
}
