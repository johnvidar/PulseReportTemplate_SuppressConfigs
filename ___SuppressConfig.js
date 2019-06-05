class SuppressConfig {

    //================================================================================
    // DATA SUPPRESSION (more info: SuppressUtil)
    //================================================================================

    static var ReportBaseSuppressValue = 1;  // Min number of responses (response = question specified below in Survey Config -> Response: {qId: 'status', codes: ['complete']})

    static var TableSuppressValue = 1;        // Min number of answers in the Aggregated Table
    static var VerbatimSuppressValue = 0;     // Min number of answers in the Verbatim Table
    static var CommentSuppressValue = 2;      // Min number of answers in the Hitlist
    static var CategoricalSuppressValue = 0; // Min number of answers for cards on the Categorical page

    // minGap: min difference between neighbour units
    // unitSufficientBase: min number of the responses when a unit is always shown irrespective of <minGap> requirement
    static var HierarchySuppress = { minGap: 0, unitSufficientBase: 10};

}