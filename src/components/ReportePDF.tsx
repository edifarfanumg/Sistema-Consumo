"use client";

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

interface Dispositivo {
  nombre: string;
  consumo: number; // en kWh
  costoHora: number;
  costoDia: number;
  costoMes: number;
}

interface Props {
  dispositivos: Dispositivo[];
  fechaInicio: string;
  fechaFin: string;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  header: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
  },
  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "20%",
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: "#000",
    padding: 5,
  },
  tableCell: {
    fontSize: 10,
  },
});

export const ReportePDF: React.FC<Props> = ({
  dispositivos,
  fechaInicio,
  fechaFin,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Reporte de Consumo Energético</Text>
      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Desde {fechaInicio} hasta {fechaFin}
      </Text>

      <View style={styles.section}>
        <Text style={styles.header}>Resumen de Dispositivos</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Dispositivo</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Consumo (kWh)</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Costo/Hora (Q)</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Costo/Día (Q)</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Costo/Mes (Q)</Text>
            </View>
          </View>

          {dispositivos.map((d, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{d.nombre}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{d.consumo.toFixed(2)}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{d.costoHora.toFixed(2)}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{d.costoDia.toFixed(2)}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{d.costoMes.toFixed(2)}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export const PDFButton: React.FC<Props> = (props) => (
  <PDFDownloadLink
    document={<ReportePDF {...props} />}
    fileName="reporte_consumo.pdf"
    style={{
      padding: "10px 20px",
      backgroundColor: "#2563eb",
      color: "#fff",
      borderRadius: 8,
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    {({ loading }) => (loading ? "Generando PDF..." : "Descargar PDF")}
  </PDFDownloadLink>
);
