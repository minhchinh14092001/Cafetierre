import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BlankSpacer from 'react-native-blank-spacer';

export default function App() {
  return (
    <View style={{
      backgroundColor: "white",
      flex: 1,
    }}>
     <View style={{
       paddingLeft: 140 
     }}>
       <Text style={{
         fontSize: 50, 
       }}>Cafetierre</Text>
        <BlankSpacer height={20}/>
       <Text style={{ width: 500 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
     </View>
     <BlankSpacer height={50}/>
      <View 
       style={{
         backgroundColor: "dodgerblue",
         flex: 1 
       }}>
         <View style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}>
      <View style={{
        backgroundColor: "dodgerblue"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "gold"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://picsum.photos/200/300"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "tomato"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "gray"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://media-exp1.licdn.com/dms/image/C560BAQG-vLQJr3J3zg/company-logo_200_200/0?e=2159024400&v=beta&t=cXNxHCDmX7A_e_LGk75XIbL-eVc7VYdHQfSFH39r3Qo"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
    </View>
       </View>
      <BlankSpacer height={50}/>
      <View 
       style={{
         backgroundColor: "gold",
         flex: 1 
       }}>
         <View style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}>
      <View style={{
        backgroundColor: "dodgerblue"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "gold"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://picsum.photos/200/300"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "tomato"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "gray"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://media-exp1.licdn.com/dms/image/C560BAQG-vLQJr3J3zg/company-logo_200_200/0?e=2159024400&v=beta&t=cXNxHCDmX7A_e_LGk75XIbL-eVc7VYdHQfSFH39r3Qo"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
    </View>
       </View>
      <BlankSpacer height={50}/>
      <View 
       style={{
         backgroundColor: "gold",
         flex: 1 
       }}>
         <View style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}>
      <View style={{
        backgroundColor: "dodgerblue"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "gold"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://picsum.photos/200/300"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "tomato"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "gray"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://media-exp1.licdn.com/dms/image/C560BAQG-vLQJr3J3zg/company-logo_200_200/0?e=2159024400&v=beta&t=cXNxHCDmX7A_e_LGk75XIbL-eVc7VYdHQfSFH39r3Qo"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
    </View>
       </View>
      <BlankSpacer height={50}/>
      <View 
       style={{
         backgroundColor: "gold",
         flex: 1 
       }}>
         <View style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}>
      <View style={{
        backgroundColor: "dodgerblue"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "gold"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://picsum.photos/200/300"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "tomato"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "gray"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://media-exp1.licdn.com/dms/image/C560BAQG-vLQJr3J3zg/company-logo_200_200/0?e=2159024400&v=beta&t=cXNxHCDmX7A_e_LGk75XIbL-eVc7VYdHQfSFH39r3Qo"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
    </View>
       </View>
       <BlankSpacer height={50}/>
      <View 
       style={{
         backgroundColor: "gold",
         flex: 1 
       }}>
         <View style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}>
      <View style={{
        backgroundColor: "dodgerblue"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "gold"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://picsum.photos/200/300"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "tomato"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
      <View style={{
        backgroundColor: "gray"
      }}>
        <Image
          source={{
            width:200,
            height: 200,
            uri: "https://media-exp1.licdn.com/dms/image/C560BAQG-vLQJr3J3zg/company-logo_200_200/0?e=2159024400&v=beta&t=cXNxHCDmX7A_e_LGk75XIbL-eVc7VYdHQfSFH39r3Qo"
          }}
        />
        <Text style={{
          textAlign: "center"
        }}>Nom du produit</Text>
      </View>
    </View>
       </View>
      <BlankSpacer height={50}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
