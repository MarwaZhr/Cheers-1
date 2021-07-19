import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonItem,
  IonLabel,
  IonAvatar,
  IonBadge,
  IonText,
  IonCard,
  IonCardContent,
  IonIcon

} from "@ionic/react";
import { useState } from "react";
import ExploreContainer from '../components/ExploreContainer';
import { chevronForwardOutline } from 'ionicons/icons';
import "./Tab2.scss";

const Tab2: React.FC = () => {
  // const[data, setData] = useState();
  return (
    <IonPage>
      <IonContent>
    <IonHeader class="ion-margin">
      
      <IonTitle class="ion-margin" >David Medvedeff</IonTitle>
      <IonAvatar class="ion-margin">
      <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="" />
    </IonAvatar>
    </IonHeader>
      <IonText className="email-address">davidmedvedeff@gmail.com</IonText>
      
        <IonCard routerLink="/Update">
          <IonCardContent>
          Update Profil
          <div>
      <IonIcon icon={chevronForwardOutline} className= "icon-card"/>
      </div>      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
          Create Event
          <div>
      <IonIcon icon={chevronForwardOutline} className= "icon-card"/>
      </div>      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
          My Events
          <div>
      <IonIcon icon={chevronForwardOutline} className= "icon-card"/>
      </div>      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
          My Coins 
      <IonBadge color="tertiary">50</IonBadge>
      <div>
      <IonIcon icon={chevronForwardOutline} className= "icon-card"/>
      </div>
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
          Log Out
          <div>
      <IonIcon icon={chevronForwardOutline} className= "icon-card"/>
      </div>
      </IonCardContent>
        </IonCard>

        

        <ExploreContainer name="Tab 1 page" />
    </IonContent>
    </IonPage>
  );
};

export default Tab2;
