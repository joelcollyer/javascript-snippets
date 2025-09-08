const { parse } = require("node-html-parser");

/**
 * Convert multi-line html into a tidy single-line string
 * Useful for flattening email notification templates
 */
const html = `<tr>
  <td class="row"><p class="subtitle">Hi!</p></td>
</tr>
<tr>
  <td class="row">
    <p class="subtitle2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent pharetra, <em title="example"> ante a molestie</em> pellentesque, nisl dui viverra metus,
      quis malesuada lorem turpis eu tortor.
    </p>
  </td>
</tr>
<tr class="row">
  <td>
    <tr style="width: 100%; text-align: left">
      <td>
        <div
          style="
            width: fit-content;
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 16px;
            padding-bottom: 16px;
            background: #ffd25e;
            border-radius: 68px;
          "
        >
          <a
            href="#TODO"
            style="
              text-decoration: none;
              text-align: center;
              color: #395966;
              font-size: 16px;
              font-family: Inter, Roboto, \'Helvetica Neue\', \'Arial Nova\', \'Nimbus Sans\', Arial, sans-serif;
              font-weight: 600;
              line-height: 20.8px;
            "
            >Big Link!</a
          >
        </div>
      </td>
    </tr>
  </td>
</tr>
`;

const str = parse(html, { voidTag: { closingSlash: true } })
  .removeWhitespace()
  .toString()
  .replace(/\\n/gm, "") // Remove escaped new line characters
  .replace(/[\s]+/gm, " ") // Prune long whitespace
  .replace(/\s\"/g, '"') // Remove trailing whitespace from html attributes
  .replace(/\="\s/g, '="') // Remove leading whitespace from html attributes
  .replace(/(<[^/][^\>]+>)\s/gm, "$1") // Remove whitespace from the beginning of html elements
  .replace(/[\s]+(<\/[^>]+>)/g, "$1") // Remove whitespace from the end of html elements
  .replace(/\'/g, "\\'"); // Escape single quotes

console.log(str);
