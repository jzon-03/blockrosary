import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { PresenterComponent } from './presenter/presenter.component';
import { SharedComponent } from './shared/shared.component';
import { IntroComponent } from './presenter/intro/intro.component';
import { PrayertotheholyspiritComponent } from './presenter/prayertotheholyspirit/prayertotheholyspirit.component';
import { EndofcovidComponent } from './presenter/endofcovid/endofcovid.component';
import { DuringcovidComponent } from './presenter/duringcovid/duringcovid.component';
import { DivinemercychapletComponent } from './presenter/divinemercychaplet/divinemercychaplet.component';
import { HailmaryComponent } from './presenter/hailmary/hailmary.component';
import { ApostlescreedComponent } from './presenter/apostlescreed/apostlescreed.component';
import { EternalfatherComponent } from './presenter/eternalfather/eternalfather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ThemostholyrosaryComponent } from './presenter/themostholyrosary/themostholyrosary.component';
import { OurfatherComponent } from './presenter/ourfather/ourfather.component';
import { GlorybeComponent } from './presenter/glorybe/glorybe.component';
import { OmyjesusComponent } from './presenter/omyjesus/omyjesus.component';
import { FivegloriousmysteriesComponent } from './presenter/fivegloriousmysteries/fivegloriousmysteries.component';
import { FivejoyfulmysteriesComponent } from './presenter/fivejoyfulmysteries/fivejoyfulmysteries.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiveluminousmysteriesComponent } from './presenter/fiveluminousmysteries/fiveluminousmysteries.component';
import { FivesorrowfulmysteriesComponent } from './presenter/fivesorrowfulmysteries/fivesorrowfulmysteries.component';
import { HailholyqueenComponent } from './presenter/hailholyqueen/hailholyqueen.component';
import { LitanyoftheblessedvirginmaryComponent } from './presenter/litanyoftheblessedvirginmary/litanyoftheblessedvirginmary.component';
import { ThememorareComponent } from './presenter/thememorare/thememorare.component';
import { PrayertostmichaelComponent } from './presenter/prayertostmichael/prayertostmichael.component';
import { PrayerofstgerttrudethegreatComponent } from './presenter/prayerofstgerttrudethegreat/prayerofstgerttrudethegreat.component';
import { FatimaprayerComponent } from './presenter/fatimaprayer/fatimaprayer.component';
import { PrayerofstignatiusofloyolaComponent } from './presenter/prayerofstignatiusofloyola/prayerofstignatiusofloyola.component';
import { PrayerofstfrancisComponent } from './presenter/prayerofstfrancis/prayerofstfrancis.component';
import { ConsecrationofsacredheartofjesusComponent } from './presenter/consecrationofsacredheartofjesus/consecrationofsacredheartofjesus.component';
import { ConsecrationtothevirginmaryComponent } from './presenter/consecrationtothevirginmary/consecrationtothevirginmary.component';
import { OurladyoffatimaComponent } from './presenter/ourladyoffatima/ourladyoffatima.component';
import { ImmaculatemotherComponent } from './presenter/immaculatemother/immaculatemother.component';
import { StjosephsongComponent } from './presenter/stjosephsong/stjosephsong.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './home/dialog/dialog.component';
import { LitanyofthemostholynameofjesusComponent } from './presenter/litanyofthemostholynameofjesus/litanyofthemostholynameofjesus.component';
import { FarewellprayerComponent } from './presenter/farewellprayer/farewellprayer.component';
import { PrayerIntentionsComponent } from './presenter/prayer-intentions/prayer-intentions.component';
import { ForOurDepartedLovedOnesComponent } from './presenter/prayer-intentions/for-our-departed-loved-ones/for-our-departed-loved-ones.component';
import { ForHealingAndSpecialIntentionsComponent } from './presenter/prayer-intentions/for-healing-and-special-intentions/for-healing-and-special-intentions.component';
import { SettingsComponent } from './presenter/settings/settings.component';
import { ShortVersionComponent } from './presenter/short-version/short-version.component';
import { ConsecrationToTheBlessedMotherComponent } from './presenter/consecration-to-the-blessed-mother/consecration-to-the-blessed-mother.component';
import { StandardComponent } from './presenter/standard/standard.component';
import { TheDivineMercyChapletComponent } from './presenter/the-divine-mercy-chaplet/the-divine-mercy-chaplet.component';
import { ActOfConsecrationToTheSacredHeartComponent } from './presenter/act-of-consecration-to-the-sacred-heart/act-of-consecration-to-the-sacred-heart.component';
import { TheHolyRosaryComponent } from './presenter/the-holy-rosary/the-holy-rosary.component';
import { LetUsPrayComponent } from './presenter/let-us-pray/let-us-pray.component';
import { TheRosaryCrusadePrayerComponent } from './presenter/the-rosary-crusade-prayer/the-rosary-crusade-prayer.component';
import { FatimaPardonPrayerComponent } from './presenter/fatima-pardon-prayer/fatima-pardon-prayer.component';
import { LetThereBePeaceOnEarthComponent } from './presenter/let-there-be-peace-on-earth/let-there-be-peace-on-earth.component';
import { MaranathaComponent } from './presenter/maranatha/maranatha.component';
import { HolySpiritHymnComponent } from './presenter/holy-spirit-hymn/holy-spirit-hymn.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PresenterComponent,
    SharedComponent,
    IntroComponent,
    PrayertotheholyspiritComponent,
    EndofcovidComponent,
    DuringcovidComponent,
    DivinemercychapletComponent,
    HailmaryComponent,
    ApostlescreedComponent,
    EternalfatherComponent,
    ThemostholyrosaryComponent,
    OurfatherComponent,
    GlorybeComponent,
    OmyjesusComponent,
    FivegloriousmysteriesComponent,
    FivejoyfulmysteriesComponent,
    FiveluminousmysteriesComponent,
    FivesorrowfulmysteriesComponent,
    HailholyqueenComponent,
    LitanyoftheblessedvirginmaryComponent,
    ThememorareComponent,
    PrayertostmichaelComponent,
    PrayerofstgerttrudethegreatComponent,
    FatimaprayerComponent,
    PrayerofstignatiusofloyolaComponent,
    PrayerofstfrancisComponent,
    ConsecrationofsacredheartofjesusComponent,
    ConsecrationtothevirginmaryComponent,
    OurladyoffatimaComponent,
    ImmaculatemotherComponent,
    StjosephsongComponent,
    HomeComponent,
    DialogComponent,
    LitanyofthemostholynameofjesusComponent,
    FarewellprayerComponent,
    PrayerIntentionsComponent,
    ForOurDepartedLovedOnesComponent,
    ForHealingAndSpecialIntentionsComponent,
    SettingsComponent,
    ShortVersionComponent,
    ConsecrationToTheBlessedMotherComponent,
    StandardComponent,
    TheDivineMercyChapletComponent,
    ActOfConsecrationToTheSacredHeartComponent,
    TheHolyRosaryComponent,
    LetUsPrayComponent,
    TheRosaryCrusadePrayerComponent,
    FatimaPardonPrayerComponent,
    LetThereBePeaceOnEarthComponent,
    MaranathaComponent,
    HolySpiritHymnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
