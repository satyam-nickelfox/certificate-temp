import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import certificateHeader from "../../assets/images/backgrounds/certificate_header.png";

// Styling
const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    marginBottom: 30,
  },
  img_container: {
    position: "relative",
  },
  headerImage: {
    // position: 'absolute',
    // width: "100%",
    // height: 350,
    // objectFit: "cover",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
  img_text_container: {
    position: "absolute",
    top: "15%",
    left: 0,
    right: 0,
  },
  certificate_no_box: {
    position: "absolute",
    right: "10px",
    bottom: "30.5%",
  },
  overlayText: {
    fontSize: 40,
    fontWeight: 700,
    textAlign: "center",
    color: "#ffffff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  overlayText_p: {
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
    color: "#ffffff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  text_c2: {
    fontSize: 12,
    fontWeight: 600,
    color: "#ffffff",
  },
  text_no_c2: {
    fontSize: 12,
    fontWeight: 600,
  },
  text_p2: {
    fontSize: 14,
    fontWeight: 600,
  },
  text_h5: {
    fontSize: 32,
    fontWeight: 600,
    color: "#1F59AF",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  m16: {
    marginTop: "16px",
  },
  divider_box: {
    width: "75%",
    marginTop : "16px"
  },
  bottom_line: {
    display: "flex",
    flexDirection : "row",
    justifyContent: "center",
    alignItems : "center",
    marginBottom: "20px",
  },
  line: {
    width: "50%",
    height: "2px",
    backgroundColor: "#1F59AF",
  },
  dot: {
    width: "9px",
    height: "9px",
    borderRadius : "50%",
    backgroundColor: "#1F59AF",
    margin : "0 10px"
  },
});

// Custom certificate component
const CertificateTemp = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.img_container}>
        <Image style={styles.headerImage} src={certificateHeader} />
        <View style={styles.img_text_container}>
          <Text style={styles.overlayText}>Certificate</Text>
          <Text style={styles.overlayText_p}>For Water Conservation</Text>
        </View>
        <View style={styles.certificate_no_box}>
          <View>
            <Text style={styles.text_c2}>BlueVerse</Text>
            <Text style={styles.text_c2}>Certificate no.</Text>
          </View>
          <Text style={styles.text_no_c2}>ASD-BV-108</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.text_p2}>Presented To</Text>
        <View style={styles.m16}>
          <Text style={styles.text_h5}>Satyam</Text>
        </View>
        <View style={styles.divider_box}>
          <View style={styles.bottom_line}>
            <Text style={styles.line}></Text>
            <Text style={styles.dot}></Text>
            <Text style={styles.line}></Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.header}>
        <Image
          style={styles.headerImage}
          src={makeIndia}
        />
      </View> */}

      {/* Content */}
      {/* <View style={styles.container}>
        <Text style={styles.title}>Certificate of Achievement</Text>
        <Text style={styles.subtitle}>Presented to</Text>
        <Text style={styles.name}>John Doe</Text>
      </View> */}
    </Page>
  </Document>
);

export default CertificateTemp;
