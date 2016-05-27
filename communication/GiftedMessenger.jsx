<View style={{
    flex: 1,
    marginTop: 20,
  }}>
  <GiftedMessenger
    ref={(c) => this._GiftedMessenger = c}
    styles={{
      container: {
        width: Dimensions.get('window').width,
      },
      bubbleRight: {
        marginLeft: 70,
        backgroundColor: "#007aff",
      },
    }}
    autoFocus={false}
    messages={[
      {
        text: 'Are you building a chat app?',
        name: 'React-Bot',
        image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
        position: 'left',
        date: new Date(2016, 3, 14, 13, 0),
        uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
      },
      {
        text: "Yes, and I use Gifted Messenger!",
        name: 'Awesome Developer',
        image: null,
        position: 'right',
        date: new Date(2016, 3, 14, 13, 1),
        uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
      },
    ]}
    handleSend={() => {}}
    onErrorButtonPress={() => {}}
    maxHeight={Dimensions.get('window').height - 20}

    loadEarlierMessagesButton={false}
    onLoadEarlierMessages={() => {}}

    senderName='Awesome Developer'
    senderImage={null}
    onImagePress={() => {}}
    displayNames={true}

    parseText={true}
    handlePhonePress={() => {}}
    handleUrlPress={() => {}}
    handleEmailPress={() => {}}

    isLoadingEarlierMessages={false}

    typingMessage={""}
  />
</View>
