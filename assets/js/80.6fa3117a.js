(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1349:function(e,t,o){"use strict";o.r(t);var s=o(25),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"sentry-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sentry-io"}},[e._v("#")]),e._v(" Sentry.io")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://sentry.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sentry.io"),s("OutboundLink")],1),e._v(" is a service that helps you monitor and fix crashes in realtime. Sentry’s platform helps every developer diagnose, fix, and optimize the performance of their code.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),s("p",[e._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/SentryIo/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Event")]),e._v(" "),s("ul",[s("li",[e._v("Get event by ID")]),e._v(" "),s("li",[e._v("Get all events")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Issue")]),e._v(" "),s("ul",[s("li",[e._v("Delete an issue")]),e._v(" "),s("li",[e._v("Get issue by ID")]),e._v(" "),s("li",[e._v("Get all issues")]),e._v(" "),s("li",[e._v("Update an issue")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Project")]),e._v(" "),s("ul",[s("li",[e._v("Get project by ID")]),e._v(" "),s("li",[e._v("Get all projects")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Release")]),e._v(" "),s("ul",[s("li",[e._v("Create a release")]),e._v(" "),s("li",[e._v("Get release by a version identifier")]),e._v(" "),s("li",[e._v("Get all releases")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Organization")]),e._v(" "),s("ul",[s("li",[e._v("Create an organization")]),e._v(" "),s("li",[e._v("Get an organization by slug")]),e._v(" "),s("li",[e._v("Get all organizations")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Team")]),e._v(" "),s("ul",[s("li",[e._v("Create a new team")]),e._v(" "),s("li",[e._v("Get team by slug")]),e._v(" "),s("li",[e._v("Get all teams")])])]),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to create a release and get all releases using the Sentry.io node. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/643",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("Sentry.io")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(876),alt:"A workflow with the Sentry.io node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-sentry-io-node-create-release"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-sentry-io-node-create-release"}},[e._v("#")]),e._v(" 2. Sentry.io node (create: release)")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the Sentry.io node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/SentryIo/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Select 'Release' from the "),s("em",[s("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Select 'Create' from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Select the organization from the "),s("em",[s("strong",[e._v("Organization Slug")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter the version in the "),s("em",[s("strong",[e._v("Version")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the URL that points to the release in the "),s("em",[s("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Select the project from "),s("em",[s("strong",[e._v("Projects")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(877),alt:"Using the Sentry.io node to create a release"}})]),e._v(" "),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_2-sentry-io-node-getall-release"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_2-sentry-io-node-getall-release"}},[e._v("#")]),e._v(" 2. Sentry.io node (getAll: release)")]),e._v(" "),s("ol",[s("li",[e._v("Select the credentials that you entered in the previous Sentry.io node.")]),e._v(" "),s("li",[e._v("Select 'Release' from the "),s("em",[s("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Select 'Get All' from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Select the organization from the "),s("em",[s("strong",[e._v("Organization Slug")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Toggle "),s("em",[s("strong",[e._v("Return All")])]),e._v(" to true.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),s("p",[s("img",{attrs:{src:o(878),alt:"Using the Sentry.io node to get all releases"}})])])}),[],!1,null,null,null);t.default=r.exports},876:function(e,t,o){e.exports=o.p+"assets/img/workflow.eb2b034b.png"},877:function(e,t,o){e.exports=o.p+"assets/img/Sentry.io_node.4f88ae18.png"},878:function(e,t,o){e.exports=o.p+"assets/img/Sentry.io1_node.dcd621f7.png"}}]);