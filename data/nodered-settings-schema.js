module.exports = {
	flowFile: "flows.json",
	flowFilePretty: true,

	/** To password protect the Node-RED editor and admin API, the following
	 * property can be used. See http://nodered.org/docs/security.html for details.
	 */
	adminAuth: {
		type: "credentials",
		users: [
			{
				username: "admin",
				password: "{password_hash}",
				permissions: "*",
			},
		],
	},

	/** Option 2: function that returns the HTTP configuration object */
	// https: function() {
	//     // This function should return the options object, or a Promise
	//     // that resolves to the options object
	//     return {
	//         key: require("fs").readFileSync('privkey.pem'),
	//         cert: require("fs").readFileSync('cert.pem')
	//     }
	// },

	/** The following property can be used to cause insecure HTTP connections to
	 * be redirected to HTTPS.
	 */
	//requireHttps: true,

	/** To password protect the node-defined HTTP endpoints (httpNodeRoot),
	 * including node-red-dashboard, or the static content (httpStatic), the
	 * following properties can be used.
	 * The `pass` field is a bcrypt hash of the password.
	 * See http://nodered.org/docs/security.html#generating-the-password-hash
	 */
	//httpNodeAuth: {user:"user",pass:"$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN."},
	//httpStaticAuth: {user:"user",pass:"$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN."},

	/** the tcp port that the Node-RED web server is listening on */
	uiPort: process.env.PORT || 1880,

	/** By default, the Node-RED UI is available at http://localhost:1880/
	 * The following property can be used to specify a different root path.
	 * If set to false, this is disabled.
	 */
	//httpAdminRoot: '/admin',

	/** The following property can be used to configure cross-origin resource sharing
	 * in the HTTP nodes.
	 * See https://github.com/troygoode/node-cors#configuration-options for
	 * details on its contents. The following is a basic permissive set of options:
	 */
	//httpNodeCors: {
	//    origin: "*",
	//    methods: "GET,PUT,POST,DELETE"
	//},

	/** When httpAdminRoot is used to move the UI to a different root path, the
	 * following property can be used to identify a directory of static content
	 * that should be served at http://localhost:1880/.
	 */
	//httpStatic: '/home/nol/node-red-static/',

	/** Configure the logging output */
	logging: {
		/** Only console logging is currently supported */
		console: {
			/** Level of logging to be recorded. Options are:
			 * fatal - only those errors which make the application unusable should be recorded
			 * error - record errors which are deemed fatal for a particular request + fatal errors
			 * warn - record problems which are non fatal + errors + fatal errors
			 * info - record information about the general running of the application + warn + error + fatal errors
			 * debug - record information which is more verbose than info + info + warn + error + fatal errors
			 * trace - record very detailed logging + debug + info + warn + error + fatal errors
			 * off - turn off all logging (doesn't affect metrics or audit)
			 */
			level: "info",
			/** Whether or not to include metric events in the log output */
			metrics: false,
			/** Whether or not to include audit events in the log output */
			audit: false,
		},
	},

	/** `global.keys()` returns a list of all properties set in global context.
	 * This allows them to be displayed in the Context Sidebar within the editor.
	 * In some circumstances it is not desirable to expose them to the editor. The
	 * following property can be used to hide any property set in `functionGlobalContext`
	 * from being list by `global.keys()`.
	 * By default, the property is set to false to avoid accidental exposure of
	 * their values. Setting this to true will cause the keys to be listed.
	 */
	exportGlobalContextKeys: false,

	/** Configure how the runtime will handle external npm modules.
	 * This covers:
	 *  - whether the editor will allow new node modules to be installed
	 *  - whether nodes, such as the Function node are allowed to have their
	 * own dynamically configured dependencies.
	 * The allow/denyList options can be used to limit what modules the runtime
	 * will install/load. It can use '*' as a wildcard that matches anything.
	 */
	externalModules: {
		// autoInstall: false,   /** Whether the runtime will attempt to automatically install missing modules */
		// autoInstallRetry: 30, /** Interval, in seconds, between reinstall attempts */
		// palette: {              /** Configuration for the Palette Manager */
		//     allowInstall: true, /** Enable the Palette Manager in the editor */
		//     allowUpdate: true,  /** Allow modules to be updated in the Palette Manager */
		//     allowUpload: true,  /** Allow module tgz files to be uploaded and installed */
		//     allowList: ['*'],
		//     denyList: [],
		//     allowUpdateList: ['*'],
		//     denyUpdateList: []
		// },
		// modules: {              /** Configuration for node-specified modules */
		//     allowInstall: true,
		//     allowList: [],
		//     denyList: []
		// }
	},

	/*******************************************************************************
	 * Editor Settings
	 *  - disableEditor
	 *  - editorTheme
	 ******************************************************************************/

	/** The following property can be used to disable the editor. The admin API
	 * is not affected by this option. To disable both the editor and the admin
	 * API, use either the httpRoot or httpAdminRoot properties
	 */
	//disableEditor: false,

	/** Customising the editor
	 * See https://nodered.org/docs/user-guide/runtime/configuration#editor-themes
	 * for all available options.
	 */
	editorTheme: {
		/** The following property can be used to set a custom theme for the editor.
		 * See https://github.com/node-red-contrib-themes/theme-collection for
		 * a collection of themes to chose from.
		 */
		//theme: "",

		/** To disable the 'Welcome to Node-RED' tour that is displayed the first
		 * time you access the editor for each release of Node-RED, set this to false
		 */
		//tours: false,

		palette: {
			/** The following property can be used to order the categories in the editor
			 * palette. If a node's category is not in the list, the category will get
			 * added to the end of the palette.
			 * If not set, the following default order is used:
			 */
			//categories: ['subflows', 'common', 'function', 'network', 'sequence', 'parser', 'storage'],
		},

		projects: {
			/** To enable the Projects feature, set this value to true */
			enabled: false,
			workflow: {
				/** Set the default projects workflow mode.
				 *  - manual - you must manually commit changes
				 *  - auto - changes are automatically committed
				 * This can be overridden per-user from the 'Git config'
				 * section of 'User Settings' within the editor
				 */
				mode: "manual",
			},
		},

		codeEditor: {
			/** Select the text editor component used by the editor.
			 * Defaults to "ace", but can be set to "ace" or "monaco"
			 */
			lib: "ace",
			options: {
				/** The follow options only apply if the editor is set to "monaco"
				 *
				 * theme - must match the file name of a theme in
				 * packages/node_modules/@node-red/editor-client/src/vendor/monaco/dist/theme
				 * e.g. "tomorrow-night", "upstream-sunburst", "github", "my-theme"
				 */
				theme: "vs",
				/** other overrides can be set e.g. fontSize, fontFamily, fontLigatures etc.
				 * for the full list, see https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandaloneeditorconstructionoptions.html
				 */
				//fontSize: 14,
				//fontFamily: "Cascadia Code, Fira Code, Consolas, 'Courier New', monospace",
				//fontLigatures: true,
			},
		},
	},

	/*******************************************************************************
	 * Node Settings
	 *  - fileWorkingDirectory
	 *  - functionGlobalContext
	 *  - functionExternalModules
	 *  - nodeMessageBufferMaxLength
	 *  - ui (for use with Node-RED Dashboard)
	 *  - debugUseColors
	 *  - debugMaxLength
	 *  - execMaxBufferSize
	 *  - httpRequestTimeout
	 *  - mqttReconnectTime
	 *  - serialReconnectTime
	 *  - socketReconnectTime
	 *  - socketTimeout
	 *  - tcpMsgQueueSize
	 *  - inboundWebSocketTimeout
	 *  - tlsConfigDisableLocalFiles
	 *  - webSocketNodeVerifyClient
	 ******************************************************************************/

	/** The working directory to handle relative file paths from within the File nodes
	 * defaults to the working directory of the Node-RED process.
	 */
	//fileWorkingDirectory: "",

	/** Allow the Function node to load additional npm modules directly */
	functionExternalModules: true,

	/** The following property can be used to set predefined values in Global Context.
	 * This allows extra node modules to be made available with in Function node.
	 * For example, the following:
	 *    functionGlobalContext: { os:require('os') }
	 * will allow the `os` module to be accessed in a Function node using:
	 *    global.get("os")
	 */
	functionGlobalContext: {
		// os:require('os'),
	},

	/** The maximum number of messages nodes will buffer internally as part of their
	 * operation. This applies across a range of nodes that operate on message sequences.
	 * defaults to no limit. A value of 0 also means no limit is applied.
	 */
	//nodeMessageBufferMaxLength: 0,

	/** If you installed the optional node-red-dashboard you can set it's path
	 * relative to httpNodeRoot
	 * Other optional properties include
	 *  readOnly:{boolean},
	 *  middleware:{function or array}, (req,res,next) - http middleware
	 *  ioMiddleware:{function or array}, (socket,next) - socket.io middleware
	 */
	//ui: { path: "ui" },

	/** Colourise the console output of the debug node */
	//debugUseColors: true,

	/** The maximum length, in characters, of any message sent to the debug sidebar tab */
	debugMaxLength: 1000,

	/** Maximum buffer size for the exec node. Defaults to 10Mb */
	//execMaxBufferSize: 10000000,

	/** Timeout in milliseconds for HTTP request connections. Defaults to 120s */
	//httpRequestTimeout: 120000,

	/** Retry time in milliseconds for MQTT connections */
	mqttReconnectTime: 15000,

	/** Retry time in milliseconds for Serial port connections */
	serialReconnectTime: 15000,

	/** Retry time in milliseconds for TCP socket connections */
	//socketReconnectTime: 10000,

	/** Timeout in milliseconds for TCP server socket connections. Defaults to no timeout */
	//socketTimeout: 120000,

	/** Maximum number of messages to wait in queue while attempting to connect to TCP socket
	 * defaults to 1000
	 */
	//tcpMsgQueueSize: 2000,

	/** Timeout in milliseconds for inbound WebSocket connections that do not
	 * match any configured node. Defaults to 5000
	 */
	//inboundWebSocketTimeout: 5000,

	/** To disable the option for using local files for storing keys and
	 * certificates in the TLS configuration node, set this to true.
	 */
	//tlsConfigDisableLocalFiles: true,

	/** The following property can be used to verify websocket connection attempts.
	 * This allows, for example, the HTTP request headers to be checked to ensure
	 * they include valid authentication information.
	 */
	//webSocketNodeVerifyClient: function(info) {
	//    /** 'info' has three properties:
	//    *   - origin : the value in the Origin header
	//    *   - req : the HTTP request
	//    *   - secure : true if req.connection.authorized or req.connection.encrypted is set
	//    *
	//    * The function should return true if the connection should be accepted, false otherwise.
	//    *
	//    * Alternatively, if this function is defined to accept a second argument, callback,
	//    * it can be used to verify the client asynchronously.
	//    * The callback takes three arguments:
	//    *   - result : boolean, whether to accept the connection or not
	//    *   - code : if result is false, the HTTP error status to return
	//    *   - reason: if result is false, the HTTP reason string to return
	//    */
	//},
};
