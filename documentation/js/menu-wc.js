'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">raychat documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ff7252cb7d344977210e6b3d559a0ba48ceb01d384812d5bc218f00dbb44c141fef3c0bbb89e45145f9df1a72cc23ca03f192b08301d5229f5bac7e7d34322b1"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ff7252cb7d344977210e6b3d559a0ba48ceb01d384812d5bc218f00dbb44c141fef3c0bbb89e45145f9df1a72cc23ca03f192b08301d5229f5bac7e7d34322b1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ff7252cb7d344977210e6b3d559a0ba48ceb01d384812d5bc218f00dbb44c141fef3c0bbb89e45145f9df1a72cc23ca03f192b08301d5229f5bac7e7d34322b1"' :
                                            'id="xs-controllers-links-module-AppModule-ff7252cb7d344977210e6b3d559a0ba48ceb01d384812d5bc218f00dbb44c141fef3c0bbb89e45145f9df1a72cc23ca03f192b08301d5229f5bac7e7d34322b1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ff7252cb7d344977210e6b3d559a0ba48ceb01d384812d5bc218f00dbb44c141fef3c0bbb89e45145f9df1a72cc23ca03f192b08301d5229f5bac7e7d34322b1"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ff7252cb7d344977210e6b3d559a0ba48ceb01d384812d5bc218f00dbb44c141fef3c0bbb89e45145f9df1a72cc23ca03f192b08301d5229f5bac7e7d34322b1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ff7252cb7d344977210e6b3d559a0ba48ceb01d384812d5bc218f00dbb44c141fef3c0bbb89e45145f9df1a72cc23ca03f192b08301d5229f5bac7e7d34322b1"' :
                                        'id="xs-injectables-links-module-AppModule-ff7252cb7d344977210e6b3d559a0ba48ceb01d384812d5bc218f00dbb44c141fef3c0bbb89e45145f9df1a72cc23ca03f192b08301d5229f5bac7e7d34322b1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RedisService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RedisService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-4d0e6e793d5630e478d356fbe5a7b90a976aa91ccb5e40cfb1ef20e03650cad619b1e9d94e9891d1da61e81719a70e97156b50d564b3e8bc42cb9ab14941f76a"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-4d0e6e793d5630e478d356fbe5a7b90a976aa91ccb5e40cfb1ef20e03650cad619b1e9d94e9891d1da61e81719a70e97156b50d564b3e8bc42cb9ab14941f76a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-4d0e6e793d5630e478d356fbe5a7b90a976aa91ccb5e40cfb1ef20e03650cad619b1e9d94e9891d1da61e81719a70e97156b50d564b3e8bc42cb9ab14941f76a"' :
                                            'id="xs-controllers-links-module-AuthModule-4d0e6e793d5630e478d356fbe5a7b90a976aa91ccb5e40cfb1ef20e03650cad619b1e9d94e9891d1da61e81719a70e97156b50d564b3e8bc42cb9ab14941f76a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-4d0e6e793d5630e478d356fbe5a7b90a976aa91ccb5e40cfb1ef20e03650cad619b1e9d94e9891d1da61e81719a70e97156b50d564b3e8bc42cb9ab14941f76a"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-4d0e6e793d5630e478d356fbe5a7b90a976aa91ccb5e40cfb1ef20e03650cad619b1e9d94e9891d1da61e81719a70e97156b50d564b3e8bc42cb9ab14941f76a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-4d0e6e793d5630e478d356fbe5a7b90a976aa91ccb5e40cfb1ef20e03650cad619b1e9d94e9891d1da61e81719a70e97156b50d564b3e8bc42cb9ab14941f76a"' :
                                        'id="xs-injectables-links-module-AuthModule-4d0e6e793d5630e478d356fbe5a7b90a976aa91ccb5e40cfb1ef20e03650cad619b1e9d94e9891d1da61e81719a70e97156b50d564b3e8bc42cb9ab14941f76a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupsModule.html" data-type="entity-link" >GroupsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GroupsModule-b9c1993d7bf467b03c6482b0c99ac7797a1b97c05f868ece7aa906817e2c9c383cd9393f01ece63ca9435f3a41a359256625c4cdbaf175ce821f2d669a0e6b74"' : 'data-bs-target="#xs-controllers-links-module-GroupsModule-b9c1993d7bf467b03c6482b0c99ac7797a1b97c05f868ece7aa906817e2c9c383cd9393f01ece63ca9435f3a41a359256625c4cdbaf175ce821f2d669a0e6b74"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GroupsModule-b9c1993d7bf467b03c6482b0c99ac7797a1b97c05f868ece7aa906817e2c9c383cd9393f01ece63ca9435f3a41a359256625c4cdbaf175ce821f2d669a0e6b74"' :
                                            'id="xs-controllers-links-module-GroupsModule-b9c1993d7bf467b03c6482b0c99ac7797a1b97c05f868ece7aa906817e2c9c383cd9393f01ece63ca9435f3a41a359256625c4cdbaf175ce821f2d669a0e6b74"' }>
                                            <li class="link">
                                                <a href="controllers/GroupsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GroupsModule-b9c1993d7bf467b03c6482b0c99ac7797a1b97c05f868ece7aa906817e2c9c383cd9393f01ece63ca9435f3a41a359256625c4cdbaf175ce821f2d669a0e6b74"' : 'data-bs-target="#xs-injectables-links-module-GroupsModule-b9c1993d7bf467b03c6482b0c99ac7797a1b97c05f868ece7aa906817e2c9c383cd9393f01ece63ca9435f3a41a359256625c4cdbaf175ce821f2d669a0e6b74"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GroupsModule-b9c1993d7bf467b03c6482b0c99ac7797a1b97c05f868ece7aa906817e2c9c383cd9393f01ece63ca9435f3a41a359256625c4cdbaf175ce821f2d669a0e6b74"' :
                                        'id="xs-injectables-links-module-GroupsModule-b9c1993d7bf467b03c6482b0c99ac7797a1b97c05f868ece7aa906817e2c9c383cd9393f01ece63ca9435f3a41a359256625c4cdbaf175ce821f2d669a0e6b74"' }>
                                        <li class="link">
                                            <a href="injectables/GroupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HipsModule.html" data-type="entity-link" >HipsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HipsModule-f999d4e61d65c765084dd3eb87647e3be12e101242002e707552686e7b4e439188d557eb329d569b6115c64ab6e26b746c21f575c802c5d7b2f8c76f4bf78cc2"' : 'data-bs-target="#xs-controllers-links-module-HipsModule-f999d4e61d65c765084dd3eb87647e3be12e101242002e707552686e7b4e439188d557eb329d569b6115c64ab6e26b746c21f575c802c5d7b2f8c76f4bf78cc2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HipsModule-f999d4e61d65c765084dd3eb87647e3be12e101242002e707552686e7b4e439188d557eb329d569b6115c64ab6e26b746c21f575c802c5d7b2f8c76f4bf78cc2"' :
                                            'id="xs-controllers-links-module-HipsModule-f999d4e61d65c765084dd3eb87647e3be12e101242002e707552686e7b4e439188d557eb329d569b6115c64ab6e26b746c21f575c802c5d7b2f8c76f4bf78cc2"' }>
                                            <li class="link">
                                                <a href="controllers/HipsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HipsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HipsModule-f999d4e61d65c765084dd3eb87647e3be12e101242002e707552686e7b4e439188d557eb329d569b6115c64ab6e26b746c21f575c802c5d7b2f8c76f4bf78cc2"' : 'data-bs-target="#xs-injectables-links-module-HipsModule-f999d4e61d65c765084dd3eb87647e3be12e101242002e707552686e7b4e439188d557eb329d569b6115c64ab6e26b746c21f575c802c5d7b2f8c76f4bf78cc2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HipsModule-f999d4e61d65c765084dd3eb87647e3be12e101242002e707552686e7b4e439188d557eb329d569b6115c64ab6e26b746c21f575c802c5d7b2f8c76f4bf78cc2"' :
                                        'id="xs-injectables-links-module-HipsModule-f999d4e61d65c765084dd3eb87647e3be12e101242002e707552686e7b4e439188d557eb329d569b6115c64ab6e26b746c21f575c802c5d7b2f8c76f4bf78cc2"' }>
                                        <li class="link">
                                            <a href="injectables/HipsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HipsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RedisCustomModule.html" data-type="entity-link" >RedisCustomModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RedisCustomModule-f5c743b3acbf2d2363f150e4a8699e84718288055c487ea08bed494abfa198e2c2e12c8242a532fcb1858a34d1de896674c5459ab0bf431f7765da62c8f686c9"' : 'data-bs-target="#xs-injectables-links-module-RedisCustomModule-f5c743b3acbf2d2363f150e4a8699e84718288055c487ea08bed494abfa198e2c2e12c8242a532fcb1858a34d1de896674c5459ab0bf431f7765da62c8f686c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RedisCustomModule-f5c743b3acbf2d2363f150e4a8699e84718288055c487ea08bed494abfa198e2c2e12c8242a532fcb1858a34d1de896674c5459ab0bf431f7765da62c8f686c9"' :
                                        'id="xs-injectables-links-module-RedisCustomModule-f5c743b3acbf2d2363f150e4a8699e84718288055c487ea08bed494abfa198e2c2e12c8242a532fcb1858a34d1de896674c5459ab0bf431f7765da62c8f686c9"' }>
                                        <li class="link">
                                            <a href="injectables/RedisService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RedisService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-a7b71291af4e8d6c6e1f6db7a4d129f91bec1017c4fa5f4f289ec584438e942c74eab382ac5383920f22b6b7161b976eb0ad3f09e13e0a9e328cb41445e34fbc"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-a7b71291af4e8d6c6e1f6db7a4d129f91bec1017c4fa5f4f289ec584438e942c74eab382ac5383920f22b6b7161b976eb0ad3f09e13e0a9e328cb41445e34fbc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-a7b71291af4e8d6c6e1f6db7a4d129f91bec1017c4fa5f4f289ec584438e942c74eab382ac5383920f22b6b7161b976eb0ad3f09e13e0a9e328cb41445e34fbc"' :
                                            'id="xs-controllers-links-module-UsersModule-a7b71291af4e8d6c6e1f6db7a4d129f91bec1017c4fa5f4f289ec584438e942c74eab382ac5383920f22b6b7161b976eb0ad3f09e13e0a9e328cb41445e34fbc"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-a7b71291af4e8d6c6e1f6db7a4d129f91bec1017c4fa5f4f289ec584438e942c74eab382ac5383920f22b6b7161b976eb0ad3f09e13e0a9e328cb41445e34fbc"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-a7b71291af4e8d6c6e1f6db7a4d129f91bec1017c4fa5f4f289ec584438e942c74eab382ac5383920f22b6b7161b976eb0ad3f09e13e0a9e328cb41445e34fbc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-a7b71291af4e8d6c6e1f6db7a4d129f91bec1017c4fa5f4f289ec584438e942c74eab382ac5383920f22b6b7161b976eb0ad3f09e13e0a9e328cb41445e34fbc"' :
                                        'id="xs-injectables-links-module-UsersModule-a7b71291af4e8d6c6e1f6db7a4d129f91bec1017c4fa5f4f289ec584438e942c74eab382ac5383920f22b6b7161b976eb0ad3f09e13e0a9e328cb41445e34fbc"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GroupsController.html" data-type="entity-link" >GroupsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HipsController.html" data-type="entity-link" >HipsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGroupDto.html" data-type="entity-link" >CreateGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateHipDto.html" data-type="entity-link" >CreateHipDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Group.html" data-type="entity-link" >Group</a>
                            </li>
                            <li class="link">
                                <a href="classes/Hip.html" data-type="entity-link" >Hip</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGroupDto.html" data-type="entity-link" >UpdateGroupDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHipDto.html" data-type="entity-link" >UpdateHipDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupService.html" data-type="entity-link" >GroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HipsService.html" data-type="entity-link" >HipsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RedisService.html" data-type="entity-link" >RedisService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PermissionsGuard.html" data-type="entity-link" >PermissionsGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CustomRequest.html" data-type="entity-link" >CustomRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});