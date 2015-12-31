/**
 * Created by DeepBlue on 2015/10/21.
 */
$('#iosdownload').click(function() {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机

        //window.location.href = "wating.html";
        alert('敬请期待！');
    } else if (u.indexOf('iPhone') > -1) {//苹果手机

        window.location.href = "https://itunes.apple.com/cn/app/heyo-hei-yo/id1058264613?l=zh&ls=1&mt=8";

    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
        alert("敬请期待");

    }else {
        window.location.href = "https://itunes.apple.com/cn/app/heyo-hei-yo/id1058264613?l=zh&ls=1&mt=8";
    }
});
$('#iosdownload').hover(function() {
   $('#iosdownload img').attr('src','images/header/iosqr.png');
});
$('#iosdownload').mouseout(function() {
    $('#iosdownload img').attr('src','images/header/img06.png')
});
$('#androiddownload').hover(function() {
    $('#androiddownload img').attr('src','images/header/androidqr.png');
});
$('#androiddownload').mouseout(function() {
    $('#androiddownload img').attr('src','images/header/img07.png')
});
$('#androiddownload').click(function() {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机

        //window.location.href = "wating.html";
        alert('敬请期待！');
    } else if (u.indexOf('iPhone') > -1) {//苹果手机

        window.location.href = "https://itunes.apple.com/cn/app/heyo-hei-yo/id1058264613?l=zh&ls=1&mt=8";

    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
        alert("敬请期待");
    }
    
});