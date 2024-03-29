import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.jar.JarEntry;
import java.util.jar.JarOutputStream;
import java.util.zip.Deflater;
public class PackJar {
public String jarFileName;
        public final int BUFFER = 2_048;
            public PackJar(String jarFileName) {
            this.jarFileName = jarFileName;
                }
                    public void pack(String dirName) throws FileNotFoundException {
                    // получение списка имен файлов в директории
                    File dir = new File(dirName);
                    if (!dir.exists() || !dir.isDirectory()) {
                        throw new FileNotFoundException(dir + " not found");
                        }
                    File[] files = dir.listFiles();
                    ArrayList<String> listFilesToJar = new ArrayList<>();
                    for (int i = 0; i < files.length; i++) {
                        if (!files[i].isDirectory()) {
                            listFilesToJar.add(files[i].getPath());
                                }
                            }
                        String[] temp = {};
                    String[] filesToJar = listFilesToJar.toArray(temp);
