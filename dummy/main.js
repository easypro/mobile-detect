/*
 * DO NOT REMOVE OR MODIFY THIS COPYRIGHT WITHOUT PERMISSION FROM DEVELOPER.
 *
 * Created by ePro Dev. Team 04/11/2017.
 * Copyright 2017 © ePro Dev. Team
 * All rights reserved.
 *
 * All contents in this file is the property of ePro Dev. Team.
 * You are not allowed to use the file or modify this file, Unless you not remove or modify this copyright.
 *
 * email : epro.dev.team@gmail.com
 */

var md = new MobileDetect(window.navigator.userAgent);

if (md.mobile()) {
    if (md.phone()) {
        window.location="https://easypro.github.io/mobile-detect/dummy/phone.html";
    } else if (md.tablet()) {
        window.location="https://easypro.github.io/mobile-detect/dummy/tablet.html";
    }
} else {
    window.location="https://easypro.github.io/mobile-detect/dummy/desktop.html";
}