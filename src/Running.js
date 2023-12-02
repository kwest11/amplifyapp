import React from 'react';
import { Grid, View } from '@aws-amplify/ui-react';

class Running extends React.Component {
    render() {
        return <>

            <View minHeight="500px" width="100%">
                <Grid
                    templateColumns="25% 75%"
                    columnGap="0.5rem"
                    rowGap="0.5rem"
                >
                    {/* Google Calendar - Running */}
                    <iframe width="100%" height="100%" frameBorder="0" scrolling="no" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&mode=AGENDA&showTabs=0&showCalendars=0&showTitle=0&showNav=0&showPrint=0&showTz=0&src=NHZmc2loOWFwbjlrbGluajJma2xrMm80cmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%234285F4"></iframe>
                    <View width='100%' height='100%' minHeight="500px">
                        {/* Strava - Summary */}
                        <iframe minHeight="160px" width='100%' height="30%" frameBorder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/27660355/activity-summary/61367fa622b91661dbe894320521bdfe7e0f0529'></iframe>
                        {/* Strava - Activities */}
                        <iframe minHeight="454" width='100%' height='70%' frameBorder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/27660355/latest-rides/61367fa622b91661dbe894320521bdfe7e0f0529'></iframe>
                        {/* Grafan - Health Dashboard 
                        <iframe minHeight="454" width='100%' height='70%' frameBorder='0' allowtransparency='true' scrolling='no' src='https://mountykoder.grafana.net/public-dashboards/c31c6848e21145d0bcc76f312759c1b6'></iframe>
    */}

                        <img src="https://srikanthg.grafana.net/d/v6zqp4f7k/brilliantpet-dashboard?orgId=1&from=1645666732065&to=1645677532065"></img>
                    </View>
                </Grid>
            </View>

        </>;
    }
}

export default Running;