import { ScrollView, StyleSheet, ScrollViewProps, Text } from 'react-native';
import { Column } from '../atoms/Column';
import { Colors } from '../../theme/colors';

type PageWrapperProps = ScrollViewProps & {
  padding?: number;
  heading?: string;
  bgColor?: string;
};

export function PageWrapper({
  children,
  padding = 16,
  heading,
  bgColor = Colors.black,
  contentContainerStyle,
  ...props
}: PageWrapperProps) {
  return (
    <ScrollView
      {...props}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.container,
        { padding, backgroundColor: bgColor },
        contentContainerStyle,
      ]}
    >
      <Column style={{ flexGrow: 1 }}>
        {heading && (
          <Text style={styles.heading}>{heading}</Text>
        )}

        {children}
      </Column>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: Colors.white, 
  },
});
