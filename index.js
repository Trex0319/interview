const documents = [
    { id: "1", type: "div", child: [{ id: "6", type: "p" }] },
    { id: "2", type: "p" },
    { id: "3", type: "a" },
    { id: "4", type: "h2" },
    {
      id: "5",
      type: "div",
      child: [{ id: "7", type: "div", child: [{ id: "8", type: "h2" }] }],
    },
  ];
  
  /**
   *
   * @param {*} id
   * @returns
   *
   * id - 6, return p
   * id - 8, return h2
   * id - 4, return h2
   * id - 3, return a
   */

const getElementById = (id, dts = documents) => {
    for (const document of dts) {
      if (document.id === id) return document.type;
      if (document.child) {
        const result = getElementById(id, document.child);
        if (result) return result;
      }
    }
    return null;
  };
  

  console.log(getElementById("1"));
  console.log(getElementById("2"));
  console.log(getElementById("3"));
  console.log(getElementById("4"));
  console.log(getElementById("5"));
  console.log(getElementById("6"));
  console.log(getElementById("7"));
  console.log(getElementById("8"));