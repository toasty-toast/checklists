import React from "react";
import { TouchableHighlight, TouchableOpacity, View } from "react-native";
import { ListItem } from "react-native-elements";
import Checklist from "../models/checklist";

const ChecklistDisplay = () => {
  const checklists: Checklist[] = [
    new Checklist(1, 'Checklist 1'),
    new Checklist(2, 'Checklist 2'),
    new Checklist(3, 'Checklist 3')
  ];

  const onChecklistPress = (checklist: Checklist) => {
    console.log(checklist);
  };

  return (
    <View>
      {
        checklists.map((checklist, i) => (
          <TouchableOpacity key={i} onPress={() => onChecklistPress(checklist)}>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{checklist.name}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))
      }
    </View>
  );
};

export default ChecklistDisplay;