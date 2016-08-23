
// See https://material.google.com/style/color.html#color-color-palette
const Colors = {
  // Deep Purple
  "*FIXED_ARRAY_TYPE_FEEDBACK_VECTOR_SUB_TYPE": "#673AB7",
  "*FIXED_ARRAY_LITERALS_ARRAY_SUB_TYPE": "#B39DDB",
  "*FIXED_ARRAY_TYPE_FEEDBACK_METADATA_SUB_TYPE": "#7E57C2",

  "*CODE_WASM_FUNCTION": "#673AB7",
  "*CODE_WASM_TO_JS_FUNCTION": "#B39DDB",
  "*CODE_JS_TO_WASM_FUNCTION": "#7E57C2",

  "INTERNALIZED_STRING_TYPE": "#673AB7",

  // Teal
  "*FIXED_ARRAY_FAST_ELEMENTS_SUB_TYPE": "#B2DFDB",
  "*FIXED_ARRAY_FAST_PROPERTIES_SUB_TYPE": "#4DB6AC",
  "*FIXED_ARRAY_DICTIONARY_ELEMENTS_SUB_TYPE": "#009688",
  "*FIXED_ARRAY_DICTIONARY_PROPERTIES_SUB_TYPE": "#00796B",

  "EXTERNAL_ONE_BYTE_INTERNALIZED_STRING_TYPE": "#B2DFDB",
  "EXTERNAL_ONE_BYTE_STRING_TYPE": "#4DB6AC",
  "EXTERNAL_INTERNALIZED_STRING_TYPE": "#009688",
  "EXTERNAL_STRING_TYPE": "#00796B",

  // Light Green
  "*FIXED_ARRAY_ENUM_CACHE_SUB_TYPE": "#AED581",
  "*FIXED_ARRAY_ENUM_INDICES_CACHE_SUB_TYPE": "#8BC34A",
  "*FIXED_ARRAY_MAP_CODE_CACHE_SUB_TYPE": "#7CB342",
  "*FIXED_ARRAY_DEPENDENT_CODE_SUB_TYPE": "#DCEDC8",

  // Orange
  "*FIXED_ARRAY_STRING_TABLE_SUB_TYPE": "#FF9800",
  "*FIXED_ARRAY_SERIALIZED_TEMPLATES_SUB_TYPE": "#FFE0B2",
  "*FIXED_ARRAY_NUMBER_STRING_CACHE_SUB_TYPE": "#FFB74D",
  "*FIXED_ARRAY_CODE_STUBS_TABLE_SUB_TYPE": "#F57C00",
  "*FIXED_ARRAY_WEAK_NEW_SPACE_OBJECT_TO_CODE_SUB_TYPE": "#FB8C00",
  "*FIXED_ARRAY_INTRINSIC_FUNCTION_NAMES_SUB_TYPE": "#EF6C00",

  "*CODE_LOAD_IC": "#FF9800",
  "*CODE_KEYED_LOAD_IC": "#FFE0B2",
  "*CODE_LOAD_GLOBAL_IC": "#FFB74D",
  "*CODE_STORE_IC": "#F57C00",
  "*CODE_KEYED_STORE_IC": "#FB8C00",
  "*CODE_CALL_IC": "#EF6C00",
  "*CODE_BINARY_OP_IC": "#E65100",
  "*CODE_COMPARE_IC": "#FFCC80",

  "SHORT_EXTERNAL_INTERNALIZED_STRING_TYPE": "#FF9800",
  "SHORT_EXTERNAL_ONE_BYTE_STRING_TYPE": "#FFE0B2",
  "SHORT_EXTERNAL_ONE_BYTE_INTERNALIZED_STRING_TYPE": "#FFB74D",
  "SHORT_EXTERNAL_STRING_TYPE": "#F57C00",

  // Brown
  "*FIXED_ARRAY_DEOPTIMIZATION_DATA_SUB_TYPE": "#795548",
  "*FIXED_ARRAY_HANDLER_TABLE_SUB_TYPE": "#A1887F",

  "*CODE_HANDLER": "#795548",
  "*CODE_BYTECODE_HANDLER": "#A1887F",

  "ONE_BYTE_INTERNALIZED_STRING_TYPE": "#795548",

  // Red
  "*FIXED_ARRAY_SCOPE_INFO_SUB_TYPE": "#F44336",
  "*FIXED_ARRAY_EMBEDDED_OBJECT_SUB_TYPE": "#E57373",

  "*CODE_OPTIMIZED_FUNCTION": "#F44336",
  "*CODE_BUILTIN": "#E57373",

  "JS_FUNCTION_TYPE": "#F44336",

  "STRING_TYPE": "#F44336",

  // Blue
  "*FIXED_ARRAY_CONTEXT_SUB_TYPE": "#2196F3",
  "*FIXED_ARRAY_DESCRIPTOR_ARRAY_SUB_TYPE": "#64B5F6",
  "*FIXED_ARRAY_COPY_ON_WRITE_SUB_TYPE": "#BBDEFB",
  "*FIXED_ARRAY_TEMPLATE_INSTANTIATIONS_CACHE_SUB_TYPE": "#90CAF9",

  "*CODE_FUNCTION": "#2196F3",

  "JS_ARRAY_TYPE": "#2196F3",

  "ONE_BYTE_STRING_TYPE": "#2196F3",

  // Green
  "*FIXED_ARRAY_SHARED_FUNCTION_INFOS_SUB_TYPE": "#4CAF50",
  "*FIXED_ARRAY_OPTIMIZED_CODE_MAP_SUB_TYPE": "#81C784",

  "SLICED_ONE_BYTE_STRING_TYPE": "#4CAF50",
  "SLICED_STRING_TYPE": "#81C784",

  "*CODE_STUB": "#4CAF50",
  "*CODE_REGEXP": "#81C784",

  // Yellow
  "*FIXED_ARRAY_BYTECODE_ARRAY_HANDLER_TABLE_SUB_TYPE": "#FFF176",
  "*FIXED_ARRAY_BYTECODE_ARRAY_CONSTANT_POOL_SUB_TYPE": "#FFEB3B",

  "CONS_ONE_BYTE_STRING_TYPE": "#FFF176",
  "CONS_STRING_TYPE": "#FFEB3B",

  "randomColorPool": [
    "#FFF176",  // Yellow
    "#4CAF50",  // Green
    "#F44336",  // Red
    "#2196F3",  // Blue
    "#795548",  // Brown
    "#FF9800",  // Orange
    "#B2DFDB",  // Teal
    "#673AB7"  // Deep purple
  ],

  getColor(name) {
    if (name in this) return this[name];
    return this.randomColorPool[Math.floor(Math.random() * this.randomColorPool.length)];
  }
};

const InstanceTypeGroups = {
  Rest: [
    "ACCESSOR_INFO_TYPE",
    "ACCESSOR_PAIR_TYPE",
    "CELL_TYPE",
    "PROTOTYPE_INFO_TYPE",
    "SYMBOL_TYPE",
    "ODDBALL_TYPE",
    "MUTABLE_HEAP_NUMBER_TYPE",
    "ACCESS_CHECK_INFO_TYPE",
    "OBJECT_TEMPLATE_INFO_TYPE",
    "FUNCTION_TEMPLATE_INFO_TYPE",
    "INTERCEPTOR_INFO_TYPE",
    "CALL_HANDLER_INFO_TYPE",
    "FOREIGN_TYPE",
    "ALLOCATION_MEMENTO_TYPE",
    "TRANSITION_ARRAY_TYPE",
    "PROPERTY_CELL_TYPE",
    "HEAP_NUMBER_TYPE",
    "SCRIPT_TYPE",
    "ALLOCATION_SITE_TYPE",
    "TYPE_FEEDBACK_INFO_TYPE",
    "FIXED_INT8_ARRAY_TYPE",
    "FIXED_UINT8_ARRAY_TYPE",
    "FIXED_UINT8_CLAMPED_ARRAY_TYPE",
    "FIXED_INT16_ARRAY_TYPE",
    "FIXED_UINT16_ARRAY_TYPE",
    "FIXED_INT32_ARRAY_TYPE",
    "FIXED_UINT32_ARRAY_TYPE",
    "FIXED_FLOAT32_ARRAY_TYPE",
    "FIXED_FLOAT64_ARRAY_TYPE",
    "FIXED_DOUBLE_ARRAY_TYPE"
  ],
  Strings: [
    "CONS_ONE_BYTE_STRING_TYPE",
    "CONS_STRING_TYPE",
    "EXTERNAL_ONE_BYTE_INTERNALIZED_STRING_TYPE",
    "EXTERNAL_ONE_BYTE_STRING_TYPE",
    "EXTERNAL_INTERNALIZED_STRING_TYPE",
    "EXTERNAL_STRING_TYPE",
    "INTERNALIZED_STRING_TYPE",
    "ONE_BYTE_INTERNALIZED_STRING_TYPE",
    "ONE_BYTE_STRING_TYPE",
    "SHORT_EXTERNAL_INTERNALIZED_STRING_TYPE",
    "SHORT_EXTERNAL_ONE_BYTE_STRING_TYPE",
    "SHORT_EXTERNAL_ONE_BYTE_INTERNALIZED_STRING_TYPE",
    "SHORT_EXTERNAL_STRING_TYPE",
    "SLICED_ONE_BYTE_STRING_TYPE",
    "SLICED_STRING_TYPE",
    "STRING_TYPE"
  ],
  JS_OTHER: [
    "JS_API_OBJECT_TYPE",
    "JS_ARGUMENTS_TYPE",
    "JS_ARRAY_BUFFER_TYPE",
    "JS_ARRAY_TYPE",
    "JS_BOUND_FUNCTION_TYPE",
    "JS_ERROR_TYPE",
    "JS_DATE_TYPE",
    "JS_FUNCTION_TYPE",
    "JS_GLOBAL_OBJECT_TYPE",
    "JS_GLOBAL_PROXY_TYPE",
    "JS_MAP_ITERATOR_TYPE",
    "JS_MAP_TYPE",
    "JS_MESSAGE_OBJECT_TYPE",
    "JS_PROMISE_TYPE",
    "JS_REGEXP_TYPE",
    "JS_SPECIAL_API_OBJECT_TYPE",
    "JS_TYPED_ARRAY_TYPE",
    "JS_VALUE_TYPE",
    "JS_WEAK_MAP_TYPE"
  ],
  FIXED_ARRAY_TYPE: [
    "*FIXED_ARRAY_CODE_STUBS_TABLE_SUB_TYPE",
    "*FIXED_ARRAY_COMPILATION_CACHE_TABLE_SUB_TYPE",
    "*FIXED_ARRAY_CONTEXT_SUB_TYPE",
    "*FIXED_ARRAY_COPY_ON_WRITE_SUB_TYPE",
    "*FIXED_ARRAY_DEOPTIMIZATION_DATA_SUB_TYPE",
    "*FIXED_ARRAY_DESCRIPTOR_ARRAY_SUB_TYPE",
    "*FIXED_ARRAY_EMBEDDED_OBJECT_SUB_TYPE",
    "*FIXED_ARRAY_ENUM_CACHE_SUB_TYPE",
    "*FIXED_ARRAY_ENUM_INDICES_CACHE_SUB_TYPE",
    "*FIXED_ARRAY_DEPENDENT_CODE_SUB_TYPE",
    "*FIXED_ARRAY_DICTIONARY_ELEMENTS_SUB_TYPE",
    "*FIXED_ARRAY_DICTIONARY_PROPERTIES_SUB_TYPE",
    "*FIXED_ARRAY_EMPTY_PROPERTIES_DICTIONARY_SUB_TYPE",
    "*FIXED_ARRAY_FAST_ELEMENTS_SUB_TYPE",
    "*FIXED_ARRAY_FAST_PROPERTIES_SUB_TYPE",
    "*FIXED_ARRAY_HANDLER_TABLE_SUB_TYPE",
    "*FIXED_ARRAY_INTRINSIC_FUNCTION_NAMES_SUB_TYPE",
    "*FIXED_ARRAY_JS_COLLECTION_SUB_TYPE",
    "*FIXED_ARRAY_JS_WEAK_COLLECTION_SUB_TYPE",
    "*FIXED_ARRAY_LITERALS_ARRAY_SUB_TYPE",
    "*FIXED_ARRAY_MAP_CODE_CACHE_SUB_TYPE",
    "*FIXED_ARRAY_NOSCRIPT_SHARED_FUNCTION_INFOS_SUB_TYPE",
    "*FIXED_ARRAY_NUMBER_STRING_CACHE_SUB_TYPE",
    "*FIXED_ARRAY_OBJECT_TO_CODE_SUB_TYPE",
    "*FIXED_ARRAY_OPTIMIZED_CODE_LITERALS_TUB_TYPE",
    "*FIXED_ARRAY_OPTIMIZED_CODE_MAP_SUB_TYPE",
    "*FIXED_ARRAY_PROTOTYPE_USERS_SUB_TYPE",
    "*FIXED_ARRAY_REGEXP_MULTIPLE_CACHE_SUB_TYPE",
    "*FIXED_ARRAY_RETAINED_MAPS_SUB_TYPE",
    "*FIXED_ARRAY_SCOPE_INFO_SUB_TYPE",
    "*FIXED_ARRAY_SCRIPT_LIST_SUB_TYPE",
    "*FIXED_ARRAY_SERIALIZED_TEMPLATES_SUB_TYPE",
    "*FIXED_ARRAY_SHARED_FUNCTION_INFOS_SUB_TYPE",
    "*FIXED_ARRAY_SINGLE_CHARACTER_STRING_CACHE_SUB_TYPE",
    "*FIXED_ARRAY_STRING_SPLIT_CACHE_SUB_TYPE",
    "*FIXED_ARRAY_STRING_TABLE_SUB_TYPE",
    "*FIXED_ARRAY_TEMPLATE_INFO_SUB_TYPE",
    "*FIXED_ARRAY_TEMPLATE_INSTANTIATIONS_CACHE_SUB_TYPE",
    "*FIXED_ARRAY_TYPE_FEEDBACK_VECTOR_SUB_TYPE",
    "*FIXED_ARRAY_TYPE_FEEDBACK_METADATA_SUB_TYPE",
    "*FIXED_ARRAY_WEAK_NEW_SPACE_OBJECT_TO_CODE_SUB_TYPE",
    "*FIXED_ARRAY_UNKNOWN_SUB_TYPE"
  ],
  CODE_TYPE: [
    "*CODE_FUNCTION",
    "*CODE_OPTIMIZED_FUNCTION",
    "*CODE_BYTECODE_HANDLER",
    "*CODE_STUB",
    "*CODE_HANDLER",
    "*CODE_BUILTIN",
    "*CODE_REGEXP",
    "*CODE_WASM_FUNCTION",
    "*CODE_WASM_TO_JS_FUNCTION",
    "*CODE_JS_TO_WASM_FUNCTION",
    "*CODE_LOAD_IC",
    "*CODE_LOAD_GLOBAL_IC",
    "*CODE_KEYED_LOAD_IC",
    "*CODE_CALL_IC",
    "*CODE_STORE_IC",
    "*CODE_KEYED_STORE_IC",
    "*CODE_BINARY_OP_IC",
    "*CODE_COMPARE_IC",
    "*CODE_TO_BOOLEAN_IC"
  ]
};

const InstanceSubTypeNames = {
  FIXED_ARRAY_TYPE: {
    keyToName: key => key.slice("*FIXED_ARRAY_".length)
                         .slice(0, -("_SUB_TYPE".length)),
    nameToKey: name => "*FIXED_ARRAY_" + name + "_SUB_TYPE"
  },
  CODE_TYPE: {
    keyToName: key => key.slice("*CODE_".length),
    nameToKey: name => "*CODE_" + name
  },
  Strings: {
    keyToName: key => key,
    nameToKey: name => name
  },
  Rest: {
    keyToName: key => key,
    nameToKey: name => name
  },
  JS_OTHER: {
    keyToName: key => key,
    nameToKey: name => name
  }
};

module.exports = {
  Colors: Colors,
  InstanceTypeGroups: InstanceTypeGroups,
  InstanceSubTypeNames: InstanceSubTypeNames
};
