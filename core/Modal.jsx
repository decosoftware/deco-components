<View> 
  <Modal 
    animated={true}
    transparent={false}
    visible={(this.state && this.state.modalVisible) || true }>
    <View 
      style={{
        flex: 1, 
        backgroundColor: '#f5fcff', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 20,
      }}>
      <Text>Hello Modal</Text>
    </View>
  </Modal>
</View>