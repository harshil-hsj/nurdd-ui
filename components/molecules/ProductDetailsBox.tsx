import { useState } from "react";
import { Column } from "../atoms/Column";
import Input from "../atoms/Input";
import { Text } from "react-native";
import { Button } from "../atoms/Button";
import { Colors } from "../../theme/colors";
import PopupMessage from "./PopupMessage";
import { updateProduct } from "../../api/product.api";

type Props = {
  Title: string;
  Type: string;
  SubType: string;
  Description: string;
  Details: string;
};

export default function ProductDetailsBox(props: Props) {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(props.Type);
  const [subType, setSubType] = useState(props.SubType);
  const [description, setDescription] = useState(props.Description);
  const [details, setDetails] = useState(props.Details);
  const [isSuccess, setSuccess] = useState(false);

  const [showMessage, setMessage] = useState("");
  const showMessagePopup = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 1500);
  };

  const onSave=async()=>{
setLoading(true);
    try {
      const isValidData = type && subType && description && details;
      if(!isValidData){
          setSuccess(false);
          showMessagePopup("All Fields Are Required");
          return;
      }
      const updatedData = { Type: type, SubType: subType, Description: description, Details: details };
      const res = await updateProduct(props.Title, updatedData);
      setSuccess(true)
      showMessagePopup("Updated Successfully");
    } catch (err) {
        setSuccess(false)
      showMessagePopup("Error updating product!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Column
      style={{
        alignItems: "center",
        gap: 12,
        width: "100%",
        backgroundColor: Colors.gray900,
        borderRadius: 16,
        padding: 16,
        position: "relative",
      }}
    >
      <Input value={type} onChangeText={setType} subheading="Type" />
      <Input value={subType} onChangeText={setSubType} subheading="SubType" />
      <Input value={description} onChangeText={setDescription} subheading="Description" />
      <Input value={details} onChangeText={setDetails} subheading="Details" multiline={true} />

      
      <Button title="Save" onPress={()=>onSave()} backgroundColor={Colors.green} textColor={Colors.white} />

      {showMessage ? <PopupMessage message={showMessage} isSuccess={isSuccess} /> : null}
    </Column>
  );
}
