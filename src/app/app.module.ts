import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';

import { WalkthroughPage } from '../pages/walkthrough/walkthrough';


import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { ColorRadio } from '../components/color-radio/color-radio';
import { CounterInput } from '../components/counter-input/counter-input';
// import { GoogleMap } from '../components/google-map/google-map';
import { Ionic2RatingModule } from 'ionic2-rating';
// import { FacebookLoginService } from '../pages/facebook-login/facebook-login.service';
// import { GoogleLoginService } from '../pages/google-login/google-login.service';
// import { TwitterLoginService } from '../pages/twitter-login/twitter-login.service';
// import { GoogleMapsService } from '../pages/maps/maps.service';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { AdMobFree } from '@ionic-native/admob-free';
import { AppRate } from '@ionic-native/app-rate';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { EmailComposer } from '@ionic-native/email-composer';

// Functionalities
// import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
// import { MapsPage } from '../pages/maps/maps';
// import { FacebookLoginPage } from '../pages/facebook-login/facebook-login';
// import { GoogleLoginPage } from '../pages/google-login/google-login';
// import { TwitterLoginPage } from '../pages/twitter-login/twitter-login';
// import { ContactCardPage } from '../pages/contact-card/contact-card';
// import { VideoPlaylistPage } from '../pages/video-playlist/video-playlist';

import { VideoPlayerModule } from '../components/video-player/video-player.module';
import { ValidatorsModule } from '../components/validators/validators.module';

import { LanguageService } from '../providers/language/language.service';
import { SearchPage } from "../pages/search/search";
import { CartPage } from "../pages/cart/cart";
import { FavoritePage } from "../pages/favorite/favorite";
import { ListScollXComponent } from '../components/list-scoll-x/list-scoll-x';
import { ListGridComponent } from '../components/list-grid/list-grid';
import { AdsHeaderBarComponent } from '../components/ads-header-bar/ads-header-bar';
import { HomeService } from "../pages/home/home.service";
import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { ShopDetailPage } from "../pages/shop-detail/shop-detail";
import { TestComponent } from '../components/test/test';
import { CartService } from "../pages/cart/cart.service";
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { ProductPage } from '../pages/product/product';
import { NotificationPage } from '../pages/notification/notification';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { LoginServiceProvider } from "../pages/login/login.service";
import { RegisterServiceProvider } from "../pages/register/register.service";
import { IonOrdersComponent } from '../components/ion-orders/ion-orders';
import { ListOrderComponent } from '../components/list-order/list-order';
import { SegmentOrderComponent } from '../components/segment-order/segment-order';


import { ProductserviceProvider } from "../pages/product/product.service";
import { ListItemsComponent } from "../components/list-items/list-items";
import { TopbarComponent } from "../components/topbar/topbar";
import { ProductDetailServiceProvider } from "../pages/product-detail/product-detail.service";
import { NotificationServiceProvider } from "../pages/notification/notification.service";
import { ListNotificationComponent } from "../components/list-notification/list-notification";
import { ProfileServiceProvider } from '../pages/profile/profile.service';

export function createTranslateLoader(http: Http) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    WalkthroughPage,
    HomePage,
    OrderPage,
    ProductPage,
    NotificationPage,
    ProfilePage,
    SearchPage,
    CartPage,
    FavoritePage,
    ProductDetailPage,
    ShopDetailPage,
    LoginPage,
    RegisterPage,
    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    TabsNavigationPage,
    // GoogleMap,
    ListScollXComponent,
    TopbarComponent,
    ListGridComponent,
    AdsHeaderBarComponent,
    TestComponent,
    IonOrdersComponent,
    ListOrderComponent,
    SegmentOrderComponent,
    ListItemsComponent,
    ListNotificationComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
		TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
      	useFactory: (createTranslateLoader),
        deps: [Http]
		    }
		}),
		VideoPlayerModule,
		ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsNavigationPage,
    WalkthroughPage,
    HomePage,
    OrderPage,
    ProductPage,
    NotificationPage,
    ProfilePage,
    SearchPage,
    CartPage,
    FavoritePage,
    ProductDetailPage,
    ShopDetailPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    HomeService,
    CartService,
    // GoogleMapsService,
		LanguageService,
    LoginServiceProvider,
    RegisterServiceProvider,
	  SplashScreen,
	  StatusBar,
    SocialSharing,
    NativeStorage,
    InAppBrowser,
    Facebook,
    GooglePlus,
    Keyboard,
    Geolocation,
    TwitterConnect,
		AdMobFree,
		AppRate,
		ImagePicker,
		Crop,
		EmailComposer,
    ProductserviceProvider,
    ProductDetailServiceProvider,
    NotificationServiceProvider,
    ProfileServiceProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
