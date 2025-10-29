package doc.txt;

import doc.core.DocumentProcessor;

public class PlainTextProcessor implements DocumentProcessor {

    @Override
    public String process(String content) {
        return content.toUpperCase(); // contoh sederhana: ubah ke huruf besar
    }

    @Override
    public String getFormatName() {
        return "Plain Text";
    }
}