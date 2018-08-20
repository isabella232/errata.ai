---
title: About
slug: about

js: [
    "demo.js"
]
---

<section class="bg-white">
   <div class="container">
      <div class="row justify-content-center text-center section-intro">
         <div class="col-12 col-md-9 col-lg-8">
            <span id="tech" class="title-decorative">Technology</span>
            <span class="lead">
            Get a complete publishing pipeline revamp or let us fill in the
            gaps.
            </span>
         </div>
      </div>
      <div class="row justify-content-around align-items-center">
         <div class="col-12 col-md-6 col-lg-3">
            <div class="gallery" id="gallery">
               <div class="mb-3 pics animation all 2">
                  <img class="img-fluid w-100" src="/img/Appveyor.png" alt="Appveyor logo">
               </div>
               <div class="mb-3 pics animation all 1">
                  <img class="img-fluid w-100" src="/img/travis.png" alt="Travis CI logo">
               </div>
               <div class="mb-3 pics animation all 2">
                  <img class="img-fluid w-100" src="/img/mdown.png" alt="Markdown logo">
               </div>
               <div class="mb-3 pics animation all 1">
                  <img id="col-lead" class="img-fluid w-100" src="/img/git.png" alt="Git logo">
               </div>
               <div class="mb-3 pics animation all 2">
                  <img class="img-fluid w-100" src="/img/netlify.png" alt="Netlify logo">
               </div>
            </div>
         </div>
         <div class="col-12 col-md-8 col-lg-6">
            <div class="accordion" id="accordion-1" data-children=".accordion-item">
               <div class="accordion-item">
                  <a data-toggle="collapse" data-parent="#accordion-1" href="#accordion-panel-1" aria-expanded="true" aria-controls="accordion-1">
                     <h5>Markup</h5>
                     <i class="h5 icon-chevron-small-right"></i>
                  </a>
                  <div id="accordion-panel-1" class="collapse show" role="tabpanel">
                     <p>
                        At <b>errata.ai</b>, we believe in using plain text&mdash;e.g., <a href="https://commonmark.org/">Markdown</a>, <a href="https://asciidoctor.org/">AsciiDoc</a>, or <a href="http://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html">reStructuredText</a>&mdash;rather
                        than proprietary writing formats. [...]
                     </p>
                  </div>
               </div>
               <div class="accordion-item">
                  <a data-toggle="collapse" data-parent="#accordion-1" href="#accordion-panel-2" aria-expanded="false" aria-controls="accordion-1">
                     <h5>Static site generators</h5>
                     <i class="h5 icon-chevron-small-right"></i>
                  </a>
                  <div id="accordion-panel-2" class="collapse" role="tabpanel">
                     <p>
                        Coming soon.
                     </p>
                  </div>
               </div>
               <div class="accordion-item">
                  <a data-toggle="collapse" data-parent="#accordion-1" href="#accordion-panel-3" aria-expanded="false" aria-controls="accordion-1">
                     <h5>CI/CD</h5>
                     <i class="h5 icon-chevron-small-right"></i>
                  </a>
                  <div id="accordion-panel-3" class="collapse" role="tabpanel">
                     <p>
                        Coming soon.
                     </p>
                  </div>
               </div>
               <div class="accordion-item">
                  <a data-toggle="collapse" data-parent="#accordion-1" href="#accordion-panel-4" aria-expanded="false" aria-controls="accordion-1">
                     <h5>Hosting</h5>
                     <i class="h5 icon-chevron-small-right"></i>
                  </a>
                  <div id="accordion-panel-4" class="collapse" role="tabpanel">
                     <p>
                        Coming soon.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <!--end of col-->
      </div>
      <!--end of row-->
   </div>
   <!--end of container-->
</section>
<section class="bg-white">
   <div class="container">
      <div class="row justify-content-center text-center section-intro">
         <div class="col-12 col-md-9 col-lg-8">
            <span id="customization" class="title-decorative">Customization</span>
            <span class="lead">
            We'll craft solutions that meet your content and structural needs.
            </span>
         </div>
         <!--end of col-->
      </div>
      <!--end of row-->
      <div class="row row-eq-height justify-content-around align-items-center">
         <div class="col-12 col-md-6 d-sm-none d-md-block">
            <figure class="gist window"><figcaption><span class="chrome button close"></span><span class="chrome button minimize"></span><span class="chrome button fullscreen"></span><span class="chrome title">example.md</span></figcaption><pre id="fm-section">---
author.name = "errata.ai"
author.email = "support@errata.ai"
categories  = [
    "markup",
    "quality assurance"
]
---</pre>
                    <span id="syntax-section" class="text-fade">
                    <p><span id="text-heading"># Parsing</span></p>
                    <p>You'll never have to worry about markup-related false positives since <span id="text-code">`code`</span>, <span id="text-link">[URLs](errata.ai)</span>, and other non-prose sections are handled correctly by all of our software.</p></span>
                    <br>
                    <pre id="sc-section" class="text-fade">{< file "hello.go" go >}
package main

import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}
{< /file >}</pre>
                    <span id="style-section" class="text-fade">
                    <p>
                        <span id="text-branding">errata.ai's</span> prose <span id="text-term">linter</span> focuses on composable styles rather than imprecise grammar-related suggestions. These styles allow you to ensure organization-specific terms are spelled and capitalized correctly.
                    </p></span></figure>
         </div>
         <div class="col-12 col-md-6">
            <ul class="nav nav-cards" role="tablist">
               <li>
                  <div class="card active" data-toggle="tab" href="#content-1" role="tab" aria-controls="content-1" aria-selected="true">
                     <div class="card-body">
                        <div class="media align-items-center">
                           <div class="step-circle mr-4">1</div>
                           <div class="media-body">
                              <h5>Front matter</h5>
                              <span>
                                We'll help you ensure that your front matter is accurate by implementing a custom <a href="https://json-schema.org/">JSON Schema</a>-based validation suite.
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
               <li>
                  <div class="card" data-toggle="tab" href="#content-2" role="tab" aria-controls="content-2" aria-selected="false">
                     <div class="card-body">
                        <div class="media align-items-center">
                           <div class="step-circle mr-4">2</div>
                           <div class="media-body">
                              <h5>Parsing</h5>
                              <span>
                              Our markup parser assigns scopes to sections of text, making it possible to employ advanced static analysis.
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
               <li>
                  <div class="card" data-toggle="tab" href="#content-3" role="tab" aria-controls="content-3" aria-selected="false">
                     <div class="card-body">
                        <div class="media align-items-center">
                           <div class="step-circle mr-4">3</div>
                           <div class="media-body">
                              <h5>Extensions</h5>
                              <span>
                              In addition to standard markup, we support defining
                              your own syntax snippets&mdash;which is a popular feature among static site generators.
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
               <li>
                  <div class="card" data-toggle="tab" href="#content-4" role="tab" aria-controls="content-4" aria-selected="false">
                     <div class="card-body">
                        <div class="media align-items-center">
                           <div class="step-circle mr-4">4</div>
                           <div class="media-body">
                              <h5>Content</h5>
                              <span>
                              We've developed the fastest syntax-aware prose
                              linter available. It's capable of checking your
                              documents against entire editorial style guides.
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </div>
      <!--end of col-->
   <!--end of row-->
   </div>
   <!--end of container-->
</section>

