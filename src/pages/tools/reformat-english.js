/*
MIT License

Copyright (c) 2020 FORNO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import React from "react";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Layout from "../../components/layout";

const ReformatEnglish = () => {
  const [text, setText] = React.useState("");
  const handleChange = (event) => {
    const newText = event.target.value
      .replace(/\n/g, " ")
      .replace(/\. {2,}/g, ". \n")
      .replace(/\. ?/g, ".\n");
    setText(newText);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleAnchorOpen = (event) => setAnchorEl(event.currentTarget);
  const handleAnchorClose = () => setAnchorEl(null);
  const anchorOpen = Boolean(anchorEl);
  const anchorId = anchorOpen ? "copied-popover" : undefined;

  return (
    <>
      <Layout pageTitle="Reformat English" createdYear="2020">
        <h2>Reformat English</h2>
        <p>Reformat english text for translation system.</p>
        <TextField
          id="english-text"
          label="English text(Auto Format)"
          placeholder="Plese put unformated English"
          fullWidth
          variant="outlined"
          multiline
          value={text}
          onChange={handleChange}
        />
        <CopyToClipboard text={text}>
          <Button
            area-describedby={anchorId}
            variant="contained"
            color="primary"
            startIcon={<AssignmentIcon />}
            onClick={handleAnchorOpen}
          >
            Copy
          </Button>
        </CopyToClipboard>
      </Layout>
      <Popover
        id={anchorId}
        open={anchorOpen}
        anchorEl={anchorEl}
        onClose={handleAnchorClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformorigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        Copy success
      </Popover>
    </>
  );
};

export default ReformatEnglish;
