import { Component } from '@angular/core';

@Component({
  selector: 'app-the-divine-mercy-chaplet',
  templateUrl: './the-divine-mercy-chaplet.component.html',
  styleUrls: ['./the-divine-mercy-chaplet.component.css']
})
export class TheDivineMercyChapletComponent {

  divineMercyChaplet=[
    {class:"", speaker:"Leader:", speech:"Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth, as it is in heaven."},
    {class:"", speaker:"ALL:", speech:"Give us this day our daily bread and forgive us our trespasses as we forgive those who trespassed against us; and lead us not into temptation, but deliver us from evil. Amen"},
    {class:"", speaker:"Leader:", speech:"Hail Mary, Full of Grace, The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus."},
    {class:"", speaker:"ALL:", speech:"Holy Mary, Mother of God, pray for us sinners now, and at the hour of our death. Amen."},
    {class:"", speaker:"ALL:", speech:"I believe in God, the Father Almighty, Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; He descended into hell; on the third day He rose again from the dead; He ascended into heaven, and is seated at the right hand of God the Father Almighty; from there He will come to judge the living and the dead. I believe in the Holy Spirit, the Holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen."},
    {class:"red", speaker:"", speech:"	(Repeat for each of 5 decades)"},
    {class:"", speaker:"Leader:", speech:"Eternal Father, I offer you the Body, Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ."},
    {class:"", speaker:"ALL:", speech:"In atonement for our sins and those of the whole world."},
    {class:"red", speaker:"",speech:"(Repeat 10x for each decade)"},
    {class:"", speaker:"Leader", speech:"For the sake of His sorrowful Passion."},
    {class:"", speaker:"ALL:", speech:"Have mercy on us and of the whole world."},
    {class:"red bold", speaker:"", speech:"(After the 5 decades)"},
    {class:"", speaker:"ALL:", speech:"Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world."},
    {class:"red", speaker:"", speech:"(Repeat 3X)"},
    {class:"", speaker:"ALL:", speech:"O Blood and water, which gushed forth from the heart of Jesus, as a Fount of mercy for us, I trust in you."},
    {class:"red", speaker:"", speech:"(Repeat 3X)"}
  ]
}
