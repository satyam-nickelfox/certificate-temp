import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import certificateHeader from "../../assets/images/backgrounds/certificate_header.png";
import normalFont from "../../Font/metropolis.light.otf";
import BoldFont from "../../Font/metropolis.medium.otf";
import ItalicFont from "../../Font/metropolis.light-italic.otf";
import swachhBharat from "../../assets/images/logo/image_1.png";
import makeIndia from "../../assets/images/logo/make_india.png";
import tvsMotor from "../../assets/images/logo/TVS_Motor_logo.png";
Font.register({
  family: "Metropolies",
  fonts: [
    { src: normalFont, fontWeight: "normal" },
    { src: BoldFont, fontWeight: "bold" },
    { src: ItalicFont, fontWeight: "ultralight" },
  ],
});

// Styling
const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#fff",
    // padding: 10,
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
  p_title_text: {
    fontSize: 14,
    fontFamily: "Metropolies", // Use the registered font family name
    fontWeight: "normal",
    lineHeight: "1.2px",
  },
  p_bold_text: {
    fontSize: 14,
    fontFamily: "Metropolies", // Use the registered font family name
    fontWeight: "bold",
    lineHeight: "1.2px",
  },
  p_italic_text: {
    fontSize: 14,
    fontFamily: "Metropolies", // Use the registered font family name
    fontWeight: "ultralight",
    lineHeight: "1.2px",
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
    marginTop: "16px",
  },
  bottom_line: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    borderRadius: "50%",
    backgroundColor: "#1F59AF",
    margin: "0 10px",
  },
  paragraph_box: {
    padding: "16px",
  },
  mt_paragraph_box: {
    marginTop: "20px",
  },
  img_btm_box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img_logo_box: {
    padding: "16px",
  },
});

// Custom certificate component
const CertificateTemp = () => (
  <Document>
    <Page size="A4" style={styles.page}>
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
      <View style={styles.paragraph_box}>
        <View style={styles.text_box}>
          <Text style={styles.p_title_text}>
            This certifies that <Text style={styles.p_bold_text}>Satyam </Text>{" "}
            has washed his 2 wheeler at the{" "}
            <Text style={styles.p_bold_text}>TVSM Service Centre </Text>
            using the <Text style={styles.p_bold_text}>BlueVerse </Text>{" "}
            automated 2 wheeler vehicle washing machine and has conserved{" "}
            <Text style={styles.p_bold_text}> 163 Lts </Text> of water recycling
            more than <Text style={styles.p_bold_text}>98% </Text>of the water
            used for the wash.
          </Text>
        </View>
        <View style={styles.mt_paragraph_box}>
          <Text style={styles.p_title_text}>
            Your efforts in conserving water are commendable and we thank you
            for taking this step in protecting our planet’s valuable resources.
          </Text>
        </View>
        <View style={styles.mt_paragraph_box}>
          <Text style={styles.p_italic_text}>
            Every small change leads to a big impact! We sincerely thank you for
            contributing to a sustainable future!
          </Text>
        </View>
      </View>
      <View style={styles.img_btm_box}>
        <View style={styles.img_logo_box}>
          <Image src={swachhBharat} />
        </View>
        <View style={styles.img_logo_box}>
          <Image src={makeIndia} />
        </View>
        <View style={styles.img_logo_box}>
          <Image src={tvsMotor} />
        </View>
      </View>
    </Page>
  </Document>
);

export default CertificateTemp;
