*{
    box-sizing: border-box;
  }
  
  .flex-container {
    display: flex;
    flex-direction: row;
    font-size: 30px;
    text-align: center;
  }
  
  .flex-item-left {
    background-color: #f1f1f1;
    padding: 10px;
    flex: 50%;
  }
  
  .flex-item-right {
    background-color: dodgerblue;
    padding: 10px;
    flex: 50%;
  }
  
  /* Responsive layout - makes a one column-layout instead of two-column layout */
  @media (max-width: 800px) {
    .flex-container {
      flex-direction: column;
    }
  }
  </style>
  </head>
  <body>
  
  <h1>Responsive Flexbox</h1>
  
  <p>The "flex-direction: row;" stacks the flex items horizontally (from left to right).</p>
  <p>The "flex-direction: column;" stacks the flex items vertically (from top to bottom).</p>
  <p><b>Resize the browser window to see that the direction changes when the 
  screen size is 800px wide or smaller.</b></p>
  
  <div class="flex-container">
    <div class="flex-item-left">1</div>
    <div class="flex-item-right">2</div>
  </div>
  