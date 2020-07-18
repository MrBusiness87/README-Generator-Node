// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${"README created by: " + data.username}
  \n
  ${
    data.stack[0] === "MIT" ? "![](https://img.shields.io/badge/license-MIT-brightgreen)" : ""
  }
  ${
    data.stack[0] === "APACHE 2.0" ? "![](https://img.shields.io/badge/license-Apache-critical)" : ""
  }
  ${
    data.stack[0] === "GPL 3.0" ? "![](https://img.shields.io/badge/license-GPLv3-blueviolet)" : ""
  }
  ${
    data.stack[0] === "BSD 3" ? "![](https://img.shields.io/badge/license-BSD3-informational)" : ""
  }
  ${
    data.stack[0] === "NONE" ? "![](https://img.shields.io/badge/license-NONE-lightgrey)" : ""
  }
  ${
    data.stack[0] === "MIT" + "APACHE 2.0" + "GPL 3.0" + "BSD 3" + "NONE" ? 
    "![](https://img.shields.io/badge/license-MIT-brightgreen)" + "![](https://img.shields.io/badge/license-Apache-critical)" + "![](https://img.shields.io/badge/license-GPLv3-blueviolet)" + "![](https://img.shields.io/badge/license-BSD3-informational)" + "![](https://img.shields.io/badge/license-NONE-lightgrey)" : ""
  }
  
  ## License:
  ${
    data.stack[0] === "MIT" ? "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. <br>Link: https://choosealicense.com/licenses/mit/" : ""
  }
  ${
    data.stack[0] === "APACHE 2.0" ? "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. <br>Link: https://choosealicense.com/licenses/apache-2.0/" : ""
  }
  ${
    data.stack[0] === "GPL 3.0" ? "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. <br>Link: https://choosealicense.com/licenses/gpl-3.0/" : ""
  }
  ${
    data.stack[0] === "BSD 3" ? "Copyright law is complex, OpenBSD policy is simple — OpenBSD strives to provide code that can be freely used, copied, modified, and distributed by anyone and for any purpose. This maintains the spirit of the original Berkeley Software Distribution. The preferred wording of a license to be applied to new code can be found in the license template. <br>Link: https://cvsweb.openbsd.org/src/share/misc/license.template?rev=HEAD" : ""
  }
  ${
    data.stack[0] === "NONE" ? "When there is no license there is no copyright, except the one you create yourself." : ""
  }

  `;
}

module.exports = generateMarkdown;