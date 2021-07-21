import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,IonThumbnail, IonImg, IonCardContent , IonToolbar,IonRow, IonLabel ,IonBadge, IonTitle,IonPage, IonBackButton, IonButtons,IonHeader,IonProgressBar,IonText,IonContent, IonInput,IonSelectOption, IonItem, IonList, IonSegment, IonIcon,IonSegmentButton, IonTextarea,IonListHeader, IonSelect, IonDatetime, IonButton, IonGrid, IonCol } from '@ionic/react';
import { diamondOutline } from 'ionicons/icons';
import './CreateEvent.scss'


interface ContainerProps {
  
}

const CoinsPurchaser: React.FC<ContainerProps> = () => {
    const coinsInfo = {0:[50, 1000, "Coins, coins, coins!", "https://cdn.dribbble.com/users/285475/screenshots/2672719/kickflip_1.gif"], 1:[100, 2000, "Coins and new friends!", ""], 2:[150, 3000, "More coins, more fun !", ""]}
  return (
    <IonPage>
    <IonHeader>
    <IonToolbar>
    <IonTitle>Coins Store</IonTitle>
    <IonButtons slot="start">
    <IonBackButton text="Back" color="dark"/> 
    </IonButtons>
    </IonToolbar>
    </IonHeader>
    <IonContent>
         &nbsp;
         <IonGrid fixed={true}>
      <IonRow > 
         &nbsp;
        <IonCol size="8.5" className="color_title_coins">Coins</IonCol>
        <IonCol size="3"> <IonBadge className="coins_icon_size"> <IonIcon icon={diamondOutline} /> 40</IonBadge></IonCol>
      </IonRow>
      </IonGrid>
      
      &nbsp;
     
          
          {[...Array(3)].map((item, index)=> {
              return (
          <IonCard key={index} className="coins_card_size">
          <IonCardHeader>
            <IonCardSubtitle> </IonCardSubtitle>
            <IonGrid>
            <IonRow>
            <IonCol size="7"><IonCardTitle className="coins_card_title_info">{coinsInfo[index][0] }<IonIcon icon={diamondOutline} size="small" /></IonCardTitle></IonCol>
            <IonCol><IonCardTitle className="coins_card_title_info" >{coinsInfo[index][1]}DT</IonCardTitle></IonCol>
            </IonRow>
            </IonGrid>
          </IonCardHeader>
           <IonCardContent className="text_size_coins">
          {coinsInfo[index][2] }
      </IonCardContent>
       <IonButton expand="full"color="primary">Buy Now</IonButton>
      &nbsp;
        </IonCard> 
        
              )
          })}
        
     </IonContent>
    </IonPage>
  );
};

export default CoinsPurchaser;
