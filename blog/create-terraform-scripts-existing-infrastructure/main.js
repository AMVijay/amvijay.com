(()=>{"use strict";var e={91:e=>{e.exports=function(e,r){return r||(r={}),e?(e=String(e.__esModule?e.default:e),r.hash&&(e+=r.hash),r.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},204:(e,r,t)=>{var o=t(91),a=t.n(o),i=new URL(t(592),t.b);const n='<h1>Create Terraform Scripts for an Existing Infrastructure</h1> <h2>Introduction</h2> <p>This blog explains solution approach and steps to create Terraform Scripts for an Existing Infrastructure. Here, AWS will be used for that infrastructure.</p> <h2>Solution Design</h2> <p><img src="'+a()(i)+'" alt=""></p> <h2>Implementation Steps</h2> <ul> <li>As a first step, need to identify the list of resources already exists in AWS infrastructure. These resources might have created manually To identify the already created (could be manually using console) resources in AWS, below listed approach will help. <ul> <li>Approach 1: Using AWS Console Tag Editor search, can identify the list resources created by resource type.</li> <li>Approach 2: Using AWS Cli command (Example : <code>aws configservice list-discovered-resources --resource-type AWS::EC2::VPC</code> ), can list down the resource list and its ids. Here, refer https://docs.aws.amazon.com/cli/latest/reference/configservice/list-discovered-resources.html#options</li> </ul> </li> <li>Create terraform script. Example:</li> </ul> <pre><code class="language-json">terraform {\r\n  required_providers {\r\n    aws = {\r\n        source = "hashicorp/aws"\r\n        version = ">= 0.15.0"\r\n    }\r\n  }\r\n}\r\n\r\nprovider "aws" {\r\n  profile = "default"\r\n  region = "us-west-2"\r\n}\n</code></pre> <ul> <li>Run command <code>terraform init</code> to intialize the terraform and make sure the terraform connectivity with infrastructure.</li> <li>Update terraform resource with resource name. Refer: Terraform documentation for the exact resource name and mandatory parameter configuration for import functionality.</li> </ul> <pre><code class="language-json">resource "aws_vpc" "test_vpc" {\r\n  cidr_block = "10.0.0.0/16"\r\n}\n</code></pre> <p>Here, cidr_block is mandatory. So added this parameter alone</p> <ul> <li>Import the resource from existing infrastructure using import command with the exact resource id noted in first step. Example <code>terraform import aws_vpc.test_vpc vpc-0841e2b7a945624b6</code>.</li> <li>Once imported, use command <code>terraform show</code> to show the exact resource details to update back in terraform script.</li> <li>then, run <code>terraform validate</code> and cleanup all the error need to be fixed. Mostly the id attributes need to be removed which was copied from show command.</li> <li>Now, after all the errors fixed, can run command <code>terranform plan</code> which should result <code>No changes. Infrastructure is up-to-date.</code>. This confirms terraform scripts and AWS infrastructure matches no need changes. Moving, forward can start making changes in terraform script and push it to AWS environment.</li> </ul> <h2>Reference</h2> <ul> <li>https://github.com/devops-israel/aws-inventory</li> <li>https://stackoverflow.com/questions/44391817/is-there-a-way-to-list-all-resources-in-aws</li> <li>https://serverfault.com/questions/648332/how-to-list-all-vpc-dependencies-in-aws-cli</li> <li><code>aws resourcegroupstaggingapi get-resources --region region_name</code></li> </ul> ',s=JSON.parse('{"title":"Create Terraform Scripts for Existing Infrastructure","description":"Creating Terraform scripts already existing Infrastructure","author":"Vijayaraaghavan Manoharan","creationDate":"10-May-2021"}');document.title=s.title,Object.keys(s).forEach((function(e){var r=document.createElement("meta");r.setAttribute("name",e),r.content=s[e],document.getElementsByTagName("head")[0].appendChild(r)})),document.getElementById("main").appendChild(function(){const e=document.createElement("div");return e.id="blog",e.innerHTML=n,e}())},592:(e,r,t)=>{e.exports=t.p+"94d3a140b52fd1b3d5d6.png"}},r={};function t(o){var a=r[o];if(void 0!==a)return a.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var o=r.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t(204)})();