import { useState } from "react";
import { Column } from "../atoms/Column";
import Input from "../atoms/Input";
import { Button } from "../atoms/Button";
import { Colors } from "../../theme/colors";
import PopupMessage from "./PopupMessage";
import { createProduct, updateProduct } from "../../api/product.api";
import { router } from "expo-router";

export default function ProductForm() {
  const [form, setForm] = useState({
    Title:"",
    Type:"",
    SubType: "",
    Description: "",
    Details: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  const showMessagePopup = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 1500);
  };

  const onChange = (key: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const onSave = async () => {
    const isFormValid = form.Title && form.Description && form.Details && form.SubType && form.Type;
    if(!isFormValid)
    {
        setSuccess(false);
        showMessagePopup("All Fields are required");
        return;
    }
    setLoading(true);
    try {
      const res = await createProduct(form);
      setSuccess(true);

      showMessagePopup("Created successfully");
      router.back();
    } catch (err) {
        setSuccess(false)
      showMessagePopup("Error Adding product");
      
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
      }}
    >
      <Input value={form.Title} subheading="Title" onChangeText={(value) => onChange("Title", value)} />
      <Input
        value={form.Type}
        onChangeText={(value) => onChange("Type", value)}
        subheading="Type"
      />

      <Input
        value={form.SubType}
        onChangeText={(value) => onChange("SubType", value)}
        subheading="SubType"
      />

      <Input
        value={form.Description}
        onChangeText={(value) => onChange("Description", value)}
        subheading="Description"
      />

      <Input
        value={form.Details}
        onChangeText={(value) => onChange("Details", value)}
        subheading="Details"
        multiline
      />

      <Button
        title={loading ? "Saving..." : "Save"}
        onPress={onSave}
        backgroundColor={Colors.green}
        textColor={Colors.white}
      />
      {message && <PopupMessage message={message} isSuccess={isSuccess} />}
    </Column>
  );
}
