Modernizr.addTest('android', function(){
    return navigator.userAgent.toLowerCase().indexOf("android") > -1;
});
Modernizr.addTest('ios', function(){
    return navigator.userAgent.match( /(iPod|iPhone|iPad)/ );
});
Modernizr.addTest('wp', function(){
    return navigator.userAgent.indexOf("Windows Phone OS") > -1;
});
Modernizr.addTest('bb', function(){
    return navigator.userAgent.match( /(PlayBook|BB10)/ );
});
Modernizr.addTest('fos', function(){
    return navigator.userAgent.match( /(Mobile)/ ) &&  navigator.userAgent.match( /(Firefox)/ );
});

Modernizr.addTest('mobile', function(){
    return navigator.userAgent.match( /(PlayBook|BB10)/ ) ||
        navigator.userAgent.indexOf("Windows Phone OS") > -1 ||
        navigator.userAgent.match( /(iPod|iPhone|iPad)/ ) ||
        navigator.userAgent.toLowerCase().indexOf("android") > -1 ||
    	(navigator.userAgent.match( /(Mobile)/ ) &&  navigator.userAgent.match( /(Firefox)/ ))
});
