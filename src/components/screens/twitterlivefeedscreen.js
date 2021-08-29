import * as React from 'react';
import { Text, View, ActivityIndicator, WebView, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
// const { View, WebView, StyleSheet, ActivityIndicator } = ReactNative

const TwitterFeed = {uri:'https://cdn.discordapp.com/attachments/880081852558372926/881382480551227412/twitterfeed.png'}
export default function TwitterLiveFeedScreen() {
  return (
    <SafeAreaView>
      <ScrollView>

   
    <ImageBackground style = {{width: "100%", height: 2200}} source ={TwitterFeed} resizeMode = 'cover'>

      <View style={{ backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
        
          

        
      </View>
      
    </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );
}

//



// export default class TwitterLiveFeedScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       loading: true,
//       embedHtml: null,
//     }
//   }

//   componentDidMount() {
//     this.setupEmbed()
//   }

//   setupEmbed() {
//     let tweetUrl =
//       "https://publish.twitter.com/oembed?url=" + encodeURIComponent(this.props.url)
//     fetch(tweetUrl, { method: "GET", headers: { Accepts: "application/json" } }).then(
//       resp => {
//         resp.json().then(json => {
//           let html = json.html
//           this.setState({
//             loading: false,
//             embedHtml: html,
//           })
//         })
//       }
//     )
//   }

//   renderLoading() {
//     if (this.state.loading) {
//       return (
//         <View style={{flex: 1,
//           backgroundColor: "#999",
//           justifyContent: "center",
//           alignItems: "center"}}>
//           <ActivityIndicator />
//         </View>
//       )
//     }
//   }

//   renderEmbed() {
//     if (this.state.embedHtml) {
//       let html = `<!DOCTYPE html>\
//         <html>\
//           <head>\
//             <meta charset="utf-8">\
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">\
//             </head>\
//             <body>\
//               ${this.state.embedHtml}\
//             </body>\
//         </html>`
//       return (
//         <View style={{flex: 1,
//           borderWidth: 1,
//           borderRadius: 4,
//           borderColor: "#999"}}>
//           <WebView source={{ html: html }} />
//         </View>
//       )
//     }
//   }
  
//   render() {
//     return (
//       <View
//         style={{ height: this.props.height || 300 }}
//       >
//         {this.renderLoading()}
//         {this.renderEmbed()}
//       </View>
//     )
//   }
// }