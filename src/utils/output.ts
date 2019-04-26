import contrast from 'contrast';

const includeLink = (param1, param2) => {
  if (param1 === true) {
    return param2;
  }
  return '';
};
export const makeReadMe = (themeName: any, imgurLink: any, checked: boolean) => {
  return `## ${themeName}
### Made with PicTheme
### Site: https://pictheme.herokuapp.com | Source: https://github.com/JoshuaScript/pictheme
${includeLink(checked, `### Based on the color palette from this image: ![IMG](${imgurLink})`)}`;
};

export const themeJSON = (themeName: any, bgColor: any, themeColors: any[]): string => {
  return `{
  "tokenColors": "./${themeName}.tmTheme",
  "colors": {
    "editor.background": "${bgColor}",
    "editorCursor.foreground": "#cccccc",
    "editor.foreground": "${themeColors[3]}",
    "editorWhitespace.foreground": "#373B41",
    "editor.lineHighlightBackground": "#30343B",
    "editor.selectionBackground": "#30343B"
  },
  "name": "${themeName}"
}`;
};

export const pkgJSON = (themeName: any, bgColor: any): string => {
  return `{
   "name": "${themeName}",
   "displayName": "${themeName}",
   "description": "",
   "version": "1.0.0",
   "publisher": "PicTheme",
   "engines":{ "vscode": "^1.0.0" },
   "categories": [ "Themes" ],
   "contributes": {
      "themes": [
         {
           "label": "${themeName} (PicTheme)",
           "uiTheme": "vs-${contrast(bgColor)}",
           "path": "./theme/${themeName}-theme.json"
          }
        ]
      }
 }`;
};

export const makeTheme = (
  themeName: any,
  bgColor: any,
  themeColors: any[],
  imgurLink?: string,
  checked?: boolean
): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
  <!-- 
    Made with PicTheme: 
      Site: http://pictheme.herokuapp.com/
      Source Code: https://github.com/JoshuaScript/PicTheme
      ${includeLink(checked, `Based on the color palette from this image: ${imgurLink})`)}
  -->
  <plist version="1.0">
    <dict>
      <key>author</key>
      <string>PicTheme</string>
      <key>colorSpaceName</key>
      <string>sRGB</string>
      <key>semanticClass</key>
      <string>theme.${contrast(bgColor)}.${themeName.replace(/[ \u00A0]/g, '_')}</string>
      <key>name</key>
      <string>${themeName}</string>
      <key>settings</key>
      <array>
        <dict>
          <key>settings</key>
          <dict>
            <key>background</key>
            <string>${bgColor}</string>
            <key>caret</key>
            <string>#F8F8F0</string>
            <key>foreground</key>
            <string>${themeColors[3]}</string>
            <key>invisibles</key>
            <string>#373B41</string>
            <key>lineHighlight</key>
            <string>#30343B</string>
            <key>selection</key>
            <string>#30343B</string>
          </dict>
        </dict>
        <!-- Comment Scope -->
        <dict>
          <key>name</key>
          <string>Comment</string>
          <key>scope</key>
          <string>comment</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>#75715e</string>
            <key>fontStyle</key>
            <string>italic</string>
          </dict>
        </dict>
        <!-- String scope -->
        <dict>
          <key>name</key>
          <string>String</string>
          <key>scope</key>
          <string>string</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[2]}</string>
          </dict>
        </dict>
        <!-- Constants Scope -->
        <dict>
          <key>name</key>
          <string>Built-in constant</string>
          <key>scope</key>
          <string>constant.language</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[0]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Built-in constant</string>
          <key>scope</key>
          <string>constant.numeric</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[8]}</string>
          </dict>
        </dict>
        <!-- Keyword Scope -->
        <dict>
          <key>name</key>
          <string>Keyword</string>
          <key>scope</key>
          <string>keyword.control</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[0]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Keyword Operator</string>
          <key>scope</key>
          <string>keyword.operator</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[3]}</string>
          </dict>
        </dict>
        <!-- Storage Scope -->
        <dict>
          <key>name</key>
          <string>Storage Function</string>
          <key>scope</key>
          <string>storage.type.function.arrow</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[3]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Storage type</string>
          <key>scope</key>
          <string>storage.type</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[0]}</string>
          </dict>
        </dict>
        <!-- Variable Scope -->
        <dict>
          <key>name</key>
          <string>Variable Other Readwrite</string>
          <key>scope</key>
          <string>variable.other.readwrite.alias</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[1]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Function argument</string>
          <key>scope</key>
          <string>variable.parameter</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string>italic</string>
            <key>foreground</key>
            <string>${themeColors[1]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Variable object property</string>
          <key>scope</key>
          <string>variable.object.property</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[4]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Variable other object</string>
          <key>scope</key>
          <string>variable.other.object</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[7]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Variable other object</string>
          <key>scope</key>
          <string>variable.other.property</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[4]}</string>
          </dict>
        </dict>
        <!-- Entity Scope -->
        <dict>
          <key>name</key>
          <string>Class name tag</string>
          <key>scope</key>
          <string>entity.name.tag</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[6]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Type name type</string>
          <key>scope</key>
          <string>entity.name.type.interface</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[1]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Type name type</string>
          <key>scope</key>
          <string>entity.name.type</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[5]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Attribute name</string>
          <key>scope</key>
          <string>entity.other.attribute-name</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[4]}</string>
          </dict>
        </dict>
        <!-- Meta Scope -->
        <dict>
          <key>name</key>
          <string>Meta Defintion Variable</string>
          <key>scope</key>
          <string>meta.definition.variable</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[1]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Meta Round Brace</string>
          <key>scope</key>
          <string>meta.brace.round</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[3]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Object Key</string>
          <key>scope</key>
          <string>meta.object-literal.key</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[4]}</string>
          </dict>
        </dict>
        <!-- String scope -->
        <dict>
          <key>name</key>
          <string>String</string>
          <key>scope</key>
          <string>string</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[2]}</string>
          </dict>
        </dict>
        <!-- Punctuation Scope -->
        <dict>
          <key>name</key>
          <string>Punctuation</string>
          <key>scope</key>
          <string>punctuation.definition.tag</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[6]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Punctuation Strings</string>
          <key>scope</key>
          <string>punctuation.definition.string</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[2]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Punctuation Comment</string>
          <key>scope</key>
          <string>punctuation.definition.comment</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>#75715e</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Punctuation</string>
          <key>scope</key>
          <string>punctuation</string>
          <key>settings</key>
          <dict>
            <key>foreground</key>
            <string>${themeColors[3]}</string>
          </dict>
        </dict>
        <!-- Support Scope -->
        <dict>
          <key>name</key>
          <string>Library type</string>
          <key>scope</key>
          <string>support.variable.property</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[4]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Library type</string>
          <key>scope</key>
          <string>support.variable</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[7]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Library type</string>
          <key>scope</key>
          <string>support.function</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[7]}</string>
          </dict>
        </dict>
        <dict>
          <key>name</key>
          <string>Library type</string>
          <key>scope</key>
          <string>support.type</string>
          <key>settings</key>
          <dict>
            <key>fontStyle</key>
            <string></string>
            <key>foreground</key>
            <string>${themeColors[5]}</string>
          </dict>
        </dict>
      </array>
    </dict>
  </plist>`;
};
