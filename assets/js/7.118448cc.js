(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1234:function(e,t,o){"use strict";o.r(t);var n=o(25),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"switch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#switch"}},[e._v("#")]),e._v(" Switch")]),e._v(" "),n("p",[e._v("The Switch node is used to route a workflow conditionally based on comparison operations. It is similar to the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/If/"}},[e._v("IF")]),e._v(" node, but supports up to four conditional routes.")],1),e._v(" "),n("h2",{attrs:{id:"node-reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Mode")])]),e._v(": This dropdown is used to select whether the conditions will be defined as rules in the node, or as an expression, programmatically.")]),e._v(" "),n("p",[e._v("You can add comparison conditions using the "),n("em",[n("strong",[e._v("Add Routing Rule")])]),e._v(" dropdown. Conditions can be created based on the data type. The available comparison operations vary for each data type.")]),e._v(" "),n("ul",[n("li",[e._v("Boolean\n"),n("ul",[n("li",[e._v("Equal")]),e._v(" "),n("li",[e._v("Not Equal")])])]),e._v(" "),n("li",[e._v("Number\n"),n("ul",[n("li",[e._v("Smaller")]),e._v(" "),n("li",[e._v("Smaller Equal")]),e._v(" "),n("li",[e._v("Equal")]),e._v(" "),n("li",[e._v("Not Equal")]),e._v(" "),n("li",[e._v("Larger")]),e._v(" "),n("li",[e._v("Larger Equal")])])]),e._v(" "),n("li",[e._v("String\n"),n("ul",[n("li",[e._v("Contains")]),e._v(" "),n("li",[e._v("Equal")]),e._v(" "),n("li",[e._v("Not Contains")]),e._v(" "),n("li",[e._v("Not Equal")]),e._v(" "),n("li",[e._v("Regex")])])])]),e._v(" "),n("p",[e._v("You can route a workflow when none of the specified conditions are met using "),n("em",[n("strong",[e._v("Fallback Output")])]),e._v(" dropdown list.")]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow executes four different Set nodes based on the output given by a Switch node. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/688",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[e._v("Function")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Switch")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("NoOp")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(589),alt:"A workflow with the Switch node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-function-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-function-node"}},[e._v("#")]),e._v(" 2. Function node")]),e._v(" "),n("ol",[n("li",[e._v("Enter the following code in the "),n("em",[n("strong",[e._v("Function")])]),e._v(" field.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("return [\n  {\n    json: {\n      id: 0,\n    }\n  },\n  {\n    json: {\n      id: 1,\n    }\n  },\n  {\n    json: {\n      id: 2,\n    }\n  }\n];\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(590),alt:"Using the Function node to send data to the Switch node"}})]),e._v(" "),n("h3",{attrs:{id:"_3-switch-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-switch-node"}},[e._v("#")]),e._v(" 3. Switch node")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Function > Output Data > JSON > id. You can also add the following expression: "),n("code",[e._v('{{$node["Function"].json["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Routing Rule")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("From the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list, select 'Equal'.")]),e._v(" "),n("li",[e._v("Enter '0' in the "),n("em",[n("strong",[e._v("Value 2")])]),e._v(" and the "),n("em",[n("strong",[e._v("Output")])]),e._v(" fields.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Routing Rule")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("From the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list, select 'Equal'.")]),e._v(" "),n("li",[e._v("Enter '1' in the "),n("em",[n("strong",[e._v("Value 2")])]),e._v(" and the "),n("em",[n("strong",[e._v("Output")])]),e._v(" fields.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Routing Rule")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("From the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list, select 'Equal'.")]),e._v(" "),n("li",[e._v("Enter '2' in the "),n("em",[n("strong",[e._v("Value 2")])]),e._v(" and the "),n("em",[n("strong",[e._v("Output")])]),e._v(" fields.")]),e._v(" "),n("li",[e._v("Select '3' from the "),n("em",[n("strong",[e._v("Fallback Output")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[n("img",{attrs:{src:o(591),alt:"Using the Switch node to conditionally execute based on the input"}})]),e._v(" "),n("h3",{attrs:{id:"_4-set-node-for-0-route"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-set-node-for-0-route"}},[e._v("#")]),e._v(" 4. Set node (for '0' route)")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[n("strong",[e._v("Set")])]),e._v(" node connected to the '0' output of the Switch node.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("n8n")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" Notice that only the id with the value 0 made its way to this "),n("em",[n("strong",[e._v("Set")])]),e._v(" node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(592),alt:"Using the Set node to set value for route 1"}})]),e._v(" "),n("h3",{attrs:{id:"_5-set1-node-for-1-route"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-set1-node-for-1-route"}},[e._v("#")]),e._v(" 5. Set1 node (for '1' route)")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[n("strong",[e._v("Set")])]),e._v(" node connected to the '1' output of the Switch node.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("nodemation")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" Notice that only the id with the value 1 made its way to this "),n("em",[n("strong",[e._v("Set")])]),e._v(" node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(593),alt:"Using the Set node to set value for route 1"}})]),e._v(" "),n("h3",{attrs:{id:"_6-set2-node-for-2-route"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-set2-node-for-2-route"}},[e._v("#")]),e._v(" 6. Set2 node (for '2' route)")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[n("strong",[e._v("Set")])]),e._v(" node connected to the '2' output of the Switch node.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("nathan")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" Notice that only the id with the value 2 made its way to this "),n("em",[n("strong",[e._v("Set")])]),e._v(" node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(594),alt:"Using the Set node to set value for route 2"}})]),e._v(" "),n("h3",{attrs:{id:"_7-noop-node-for-3-route"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-noop-node-for-3-route"}},[e._v("#")]),e._v(" 7. NoOp node (for '3' route)")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[n("strong",[e._v("NoOp")])]),e._v(" node connected to the '3' output of the Switch node.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" Notice that none of the ids made their way to this node since the values of the all the ids were either 0, 1, or 2.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(595),alt:"Using the NoOp node for route 3"}})])])}),[],!1,null,null,null);t.default=r.exports},589:function(e,t,o){e.exports=o.p+"assets/img/workflow.092b97d2.png"},590:function(e,t,o){e.exports=o.p+"assets/img/Function_node.12fcf600.png"},591:function(e,t,o){e.exports=o.p+"assets/img/Switch_node.d121ceb7.png"},592:function(e,t,o){e.exports=o.p+"assets/img/Set_node.9f9445c3.png"},593:function(e,t,o){e.exports=o.p+"assets/img/Set1_node.6e20a7d0.png"},594:function(e,t,o){e.exports=o.p+"assets/img/Set2_node.f82fd1e5.png"},595:function(e,t,o){e.exports=o.p+"assets/img/NoOp_node.b606c187.png"}}]);