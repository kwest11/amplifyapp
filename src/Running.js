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
                        {/* Grafana - Health Dashboard 
                        <iframe minHeight="454" width='100%' height='100%' frameBorder='0' allowtransparency='true' scrolling='no' src='https://mountykoder.grafana.net/dashboard/snapshot/L525Lb991cQkfcK7DmwWpvOeHgDZaWPR'></iframe>
                        {/* <img src="https://mountykoder.grafana.net/d/ce8d9fd5-b9c4-4d13-a317-b6f9ee15d980/health-dashboard?orgId=1&from=1672549200000&to=1704085199999"></img> */}
                        <iframe src="https://mountykoder.grafana.net/d-solo/ce8d9fd5-b9c4-4d13-a317-b6f9ee15d980/health-dashboard?orgId=1&from=1672549200000&to=1704085199999&panelId=2" width="450" height="200"></iframe>
                    </View>
                </Grid>
            </View>

        </>;
    }
}

export default Running;