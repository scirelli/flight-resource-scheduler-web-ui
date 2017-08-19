#!/usr/bin/env bash

pwd;

JQUERY_HOME='./node_modules/jquery'
JQUERY_OUTPUT_DIR='./www/static/vendor/jquery'
if [ ! -d "$JQUERY_OUTPUT_DIR" ] ; then
    echo 'Creating jQuery output folder.'
    mkdir -p "$JQUERY_OUTPUT_DIR"
fi
cp "$JQUERY_HOME"/dist/jquery.min.* "$JQUERY_OUTPUT_DIR"

BOOTSTRAP_HOME='./node_modules/bootstrap'
BOOTSTRAP_OUTPUT_DIR='./www/static/vendor/bootstrap'
if [ ! -d "$BOOTSTRAP_OUTPUT_DIR" ] ; then
    echo 'Creating Bootstrap output folder.'
    mkdir -p "$BOOTSTRAP_OUTPUT_DIR"
fi
cp -r "$BOOTSTRAP_HOME"/dist/* "$BOOTSTRAP_OUTPUT_DIR"
