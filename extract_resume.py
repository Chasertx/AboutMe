import zipfile
from xml.etree import ElementTree as ET

path = r'C:\Users\Predator\Downloads\Chase_Ashby_Resume_OnePage1.docx'
with zipfile.ZipFile(path) as z:
    xml = z.read('word/document.xml')
root = ET.fromstring(xml)
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
texts = []
for para in root.findall('.//w:p', ns):
    bits = []
    for t in para.findall('.//w:t', ns):
        if t.text:
            bits.append(t.text)
    if bits:
        texts.append(''.join(bits))
print('\n'.join(texts))
