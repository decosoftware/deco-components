<View style={{flex:1, width: 300,}}>
  <ScrollView 
    onScroll={() => {}}
    refreshControl={null} // Optionally use a RefreshControl here
    horizontal={false}
    showVerticalScrollIndicator={true}
    showHorizontalScrollIndicator={false}
    alwaysBounceVertical={true}
    alwaysBounceHorizontal={false}
    style={{backgroundColor: "rgba(74,144,226,1)", height: 300,}}
    contentOffset={{x: 0, y: 0}}
    pagingEnabled={false}>
    {[1,2,3,4,5].map((item, i) => {
      return <View key={i} style={{flex: 1, alignItems: 'center', margin: 10,}}>
        <Text>{item}</Text>
      </View>
    })}
  </ScrollView>
</View>