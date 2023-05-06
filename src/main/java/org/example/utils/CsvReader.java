package org.example.utils;

import org.example.domain.Student;

import java.io.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Scanner;

public class CsvReader {

    public static void main(String[] args) {
        parse();
//        clearFile();
    }

    public static void parse() {

        String csvFile = "src/main/resources/students.csv";
        BufferedReader br = null;
        String line = "";

        try {
            br = new BufferedReader(new FileReader(csvFile));
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                String digitsOnly = values[0].replaceAll("[^0-9]", ""); // removes all non-numeric characters
                writeToFile("INSERT INTO Student (student_id, name, email, password, dob) VALUES (" + digitsOnly + ", '" + values[1].trim() + "', '" + values[2].trim() + "', '" + values[3].trim() + "', '" + values[4].trim() + "');");
            }
        } catch (Exception e) {
            System.out.printf("Caught Exception: %s%n", e.getMessage());
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    private static void writeToFile(String stmt){
        try(FileWriter fw = new FileWriter("src/main/resources/import.sql", true);
            BufferedWriter bw = new BufferedWriter(fw);
            PrintWriter out = new PrintWriter(bw)) {
            out.println(stmt);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void clearFile() {
        try{
            FileWriter fw = new FileWriter("src/main/resources/import.sql", false);
            PrintWriter pw = new PrintWriter(fw, false);
            pw.flush();
            pw.close();
            fw.close();
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
