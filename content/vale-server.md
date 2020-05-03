---
title: Vale Server
slug: vale-server

layout: raw

css: [
    'editor.css',
    'popimg.css'
]
js: [
    'ace/ace.js',
    'editor.js',
    'form.js'
]
---
<section class="pb-0">
   <div class="container">
      <div class="row justify-content-center text-center section-intro mb-0">
         <div class="col-12 col-md-9 col-lg-8 pb-3">
            <span class="title-decorative">Introducing Vale Server</span>
            <h3 class="display-4">Your style, our editor</h3>
            <span class="lead">
            Vale Server is a cross-platform (<i class="fab fa-apple"></i> and <i class="fab fa-windows"></i>)
            desktop application that brings <i>your</i> editorial style guide to
            life.
            </span>
            <a href="#puchase" class="btn btn-lg btn-success">Get Started</a>
            <a href="https://errata-ai.github.io/vale-server/docs/about.html" class="btn btn-lg btn-link">Documentation <i class="icon-chevron-right"></i></a>
         </div>
         <div class="justify-content-center text-center">
            <div class="popover-image">
                  <div
                    class="popover-hotspot bg-warning animated infinite pulse"
                    style="top: 40%; left: 25%;"
                    data-toggle="tooltip"
                    data-html="true"
                    title="Use your favorite applications&mdash;Vale Server can run on your clipboard or through one of its third-party integrations."><i class="fas fa-info"></i>
                  </div>
                  <div
                    class="popover-hotspot bg-danger animated infinite pulse"
                    style="top: 10%; left: 73%;"
                    data-toggle="tooltip"
                    data-html="true"
                    title="Vale Server is a <i>native</i> desktop application, allowing it to seemlessly integrate into your environment."><i class="fas fa-info"></i>
                  </div>
                  <div
                    class="popover-hotspot bg-info animated infinite pulse"
                    style="top: 80%; left: 70%;"
                    data-toggle="tooltip"
                    title="Bring your style guide to life: Vale Server helps you ensure that your writing is clear, concise, and on-brand."><i class="fas fa-info"></i>
                  </div>
                  <img src="/img/vale-server/desktop.png" alt="Image" class="img-fluid">
            </div>
         </div>
      <!--end of row-->
      </div>
   </div>
   <!--end of container-->
</section>

<section>
    <div class="container">
        <!--end of row-->
        <ul class="row feature-list">
            <li class="col-12 col-md-4">
                <i class="icon-tv h1 text-teal"></i>
                <h5>Native performance</h5>
                <p>
                    Vale Server is a native desktop application. There are no
                    size restraints, usage quotas, or other limitations.
                </p>
            </li>
            <!--end of col-->
            <li class="col-12 col-md-4">
                <i class="icon-cog h1 text-teal"></i>
                <h5>Extensible</h5>
                <p>
                    Vale Server's extension system allows you to create your own
                    style from scratch or add your own terms to an existing style.
                </p>
            </li>
            <!--end of col-->
            <li class="col-12 col-md-4">
                <i class="icon-lock h1 text-teal"></i>
                <h5>Secure</h5>
                <p>
                    Vale Server runs locally, ensuring that you never have
                    to send your content to a remote server.
                </p>
            </li>
            <!--end of col-->
        </ul>
        <!--end of row-->
    </div>
    <!--end of container-->
</section>


<section>
    <div class="container">
        <div class="row justify-content-center text-center section-intro">
            <div class="col-12 col-md-9 col-lg-8">
                <span class="title-decorative">Not another grammar checker</span>
                <h2 class="display-4">Control <i>your</i> content</h2>
                <span class="lead">
                    Vale Server doesn’t attempt to teach you how to write; it’s a tool <i>for</i> writers. It focuses on writing <i>style</i>&mdash;allowing you to control your voice, terminology, and branding by writing your own rules or using a pre-made style.
                </span>
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-6"><!--width is set by this div -->
                      <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <button id="lint" class="btn btn-success" type="button"><i class="fas fa-check"></i> Check text</button>
                          </div>
                          <select class="custom-select" id="styles">
                            <option selected>Choose a style</option>
                            <option value="0">Microsoft</option>
                            <option value="1">proselint</option>
                            <option value="2">Joblint</option>
                          </select>
                        </div>
                    </div>
                  </div>
                </div>
                <p id="style-info" class="small pt-2">
                    Click on an alert (the right-side panel) to highlight the relevant text in the editor (the left-side panel).
                </p>
            </div>
            <!--end of col-->
        </div>
        <!--end of row-->
        <div class="row justify-content-center">
            <div class="col-sm-6" id="htmPane">
                <div class="inner jumbotron" id="htmEditor"></div>
            </div>
            <div class="col-sm-6">
                <div id="alerts" class="list-group">
                  <div class="list-group-item flex-column align-items-start list-group-item-warning">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Microsoft.Hyphens [warning]</h5>
                    </div>
                    <p class="mb-1">'externally-' doesn't need a hyphen.</p>
                    <small>
                        <a id="0" class="rule" href="#">Highlight text</a> |
                        <a href="https://docs.microsoft.com/en-us/style-guide/punctuation/dashes-hyphens/hyphens" target="_blank">Read more</a> |
                        <a href="https://github.com/errata-ai/Microsoft/blob/master/Microsoft/Hyphens.yml" target="_blank">View rule</a>
                    </small>
                  </div>
                  <div class="list-group-item flex-column align-items-start list-group-item-danger">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Microsoft.Quotes [error]</h5>
                    </div>
                    <p class="mb-1">Punctuation should go inside the quotes.</p>
                    <small>
                        <a id="1" class="rule" href="#">Highlight text</a> |
                        <a href="https://docs.microsoft.com/en-us/style-guide/punctuation/quotation-marks" target="_blank">Read more</a> |
                        <a href="https://github.com/errata-ai/Microsoft/blob/master/Microsoft/Quotes.yml" target="_blank">View rule</a>
                    </small>
                  </div>
                  <div class="list-group-item flex-column align-items-start list-group-item-info">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">Microsoft.Headings [suggestion]</h5>
                    </div>
                    <p class="mb-1">'Another Section' should use sentence-style capitalization.</p>
                    <small>
                        <a id="2" class="rule" href="#">Highlight text</a> |
                        <a href="https://docs.microsoft.com/en-us/style-guide/capitalization" target="_blank">Read more</a> |
                        <a href="https://github.com/errata-ai/Microsoft/blob/master/Microsoft/Headings.yml" target="_blank">View rule</a>
                    </small>
                  </div>
                </div>
            </div>
        </div>
        <!--end of row-->
        <div class="row justify-content-center text-center section-outro">
            <div class="col-lg-4 col-md-5">
                <h6>Need help creating your own style? We've got you covered.</h6>
                <p class="f5 text-gray">
                    Check out our <a href="https://github.com/errata-ai/styles">styles library</a> for inspiration or make use of our <a href="/services/">Integration Assistance</a> service.
                </p>
                <a href="/services/">Learn more about our services &rsaquo;</a>
            </div>
            <!--end of col-->
        </div>
    </div>
    <!--end of container-->
</section>

<section>
    <div class="container">
        <div class="row justify-content-center text-center section-intro">
            <div class="col-12 col-md-9 col-lg-8">
                <span class="title-decorative">Multiple styles &amp; projects</span>
                <h2 class="display-4">Simplify your workflow</h2>
                <span class="lead">
                    Vale Server allows you to manage multiple <a href="https://errata-ai.github.io/vale/styles/">styles</a> and projects
                    at once, helping you keep <i>all</i> of your content guidelines straight.
                </span>
            </div>
            <!--end of col-->
        </div>
        <!--end of row-->
        <ul class="feature-list feature-list-lg">
            <li class="row justify-content-around align-items-center">
                <div class="col-12 col-md-6 col-lg-5">
                    <img alt="Image" src="/img/vale-server/styles.png" class="img-fluid" data-action="zoom">
                </div>
                <!--end of col-->
                <div class="col-12 col-md-6 col-lg-5">
                    <h5>Choose your style</h5>
                    <p>
                    Styles are folders consisting of simple, easy-to-share YAML files. You can create your own or use one from our existing collection.
                    </p>
                    <a href="https://errata-ai.github.io/vale-server/docs/style">More about styles ›</a>
                </div>
                <!--end of col-->
            </li>
            <li class="row justify-content-around align-items-center">
                <div class="col-12 col-md-6 col-lg-5 order-lg-2">
                    <img alt="Image" src="/img/vale-server/projects.png" class="img-fluid" data-action="zoom">
                </div>
                <!--end of col-->
                <div class="col-12 col-md-6 col-lg-5">
                    <h5>Start a project</h5>
                    <p>
                        Manage and switch between different configurations for each of your writing projects.
                    </p>
                    <a href="https://errata-ai.github.io/vale-server/docs/ui#projects">More about projects ›</a>
                </div>
                <!--end of col-->
            </li>
            <li class="row justify-content-around align-items-center">
                <div class="col-12 col-md-6 col-lg-5">
                    <img alt="Image" src="/img/vale-server/general.png" class="img-fluid" data-action="zoom">
                </div>
                <!--end of col-->
                <div class="col-12 col-md-6 col-lg-5">
                    <h5>Integrate with other applications</h5>
                    <p>
                        Vale Server exposes its functionality over a local API, making it
                        possible to integrate with third-party applications.
                    </p>
                </div>
                <!--end of col-->
            </li>
        </ul>
    </div>
    <!--end of container-->
</section>

<section>
    <div class="container">
        <div class="row justify-content-center text-center section-intro">
            <div class="col-12 col-md-9 col-lg-8">
                <span class="title-decorative">USE YOUR FAVORITE APPS</span>
                <h2 class="display-4">Write with style&mdash;wherever you want</h2>
                <span class="lead">Vale Server directly integrates with many popular text editors and writing applications.</span>
            </div>
            <div class="col-10">
                <figure class="figure">
                  <img alt="Dashboard example" src="/img/vale-server/clip.png" class="img-fluid box-shadow rounded" data-action="zoom">
                  <figcaption class="figure-caption text-center pt-2">Vale Server can check text from your clipboard, allowing you to use it on any text field.</figcaption>
                </figure>
                <!--end of video cover-->
            </div>
            <!--end of col-->
        </div>
        <div class="text-center mt-5">
            <div class="apps-cluster d-flex flex-wrap flex-justify-center pb-6">
                <div data-toggle="tooltip" title="Atom" class="CircleBadge CircleBadge--medium CircleBadge--feature" style="background-color: #FFF;">
                    <a href="https://errata-ai.github.io/vale-server/docs/atom">
                        <img src="/img/atom.png" alt="Atom" class="CircleBadge-icon">
                    </a>
                </div>
                <div data-toggle="tooltip" title="Google Docs" class="CircleBadge CircleBadge--medium CircleBadge--feature" style="background-color: #FFF;">
                    <a href="https://errata-ai.github.io/vale-server/docs/gdocs">
                        <img src="/img/gdocs.png" alt="Google Docs" class="CircleBadge-icon" style="max-width: 80%;">
                    </a>
                </div>
                <div data-toggle="tooltip" title="Sublime Text" class="CircleBadge CircleBadge--medium CircleBadge--feature" style="background-color: #FFF;">
                    <a href="https://errata-ai.github.io/vale-server/docs/st3">
                        <img src="/img/sublime.png" alt="Sublime Text" class="CircleBadge-icon">
                    </a>
                </div>
                <div data-toggle="tooltip" title="Visual Studio Code" class="CircleBadge CircleBadge--medium CircleBadge--feature" style="background-color: #FFF;">
                    <a href="https://errata-ai.github.io/vale-server/docs/vscode">
                        <img src="/img/code.png" alt="VS Code" class="CircleBadge-icon">
                    </a>
                </div>
                <div data-toggle="tooltip" title="Google Chrome" class="CircleBadge CircleBadge--medium CircleBadge--feature" style="background-color: #FFF;">
                    <a href="https://errata-ai.github.io/vale-server/docs/chrome">
                        <img src="/img/chrome.png" alt="Google Chrome" class="CircleBadge-icon">
                    </a>
                </div>
            </div>
        </div>
        <!--end of row-->
        <div class="row justify-content-center text-center section-outro">
            <div class="col-lg-4 col-md-5">
                <h6>Don't see your favorite app?</h6>
                <a href="https://github.com/errata-ai/vale/issues/new">Open a feature request &rsaquo;</a>
            </div>
        </div>
    </div>
</section>

<section id="puchase" class="pb-0">
    <div class="container">
        <div class="row justify-content-center text-center section-intro">
            <div class="col-12 col-md-9 col-lg-8">
                <span class="title-decorative">Simple, one-time pricing</span>
                <h3 class="display-4">No subscriptions</h3>
                <span class="lead">Vale Server offers one-time pricing, avoiding the hassle of managing subscriptions and surprise charges.</span>
                <button id="trial-btn" type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-success btn-lg disabled" disabled>Download Free Trial (coming soon!)</button>
                <a class="btn btn-info btn-lg" href="https://gum.co/tfzHE" target="_blank">Buy Now $40</a>
                <p id="trial-text" class="small mt-3">
                    Vale Server offers 30-day, zero-obligation free trial&mdash;no payment information required!
                </p>
            </div>
        </div>
    </div>
</section>

<section id="faq" class="bg-white pt-0">
    <div class="container">
        <div class="row justify-content-center section-intro">
            <div class="col-auto">
                <h2 class="h1">FAQ</h2>
            </div>
            <!--end of col-->
        </div>
        <!--end of row-->
        <ul class="row feature-list feature-list-sm justify-content-center">
            <li class="col-12 col-md-6 col-lg-5">
                <div class="card">
                    <div class="card-body">
                        <h6>How does payment work?</h6>
                        <p>
                            Your payment is handled securely by <a href="https://help.gumroad.com/article/147-safe-buying-on-gumroad">Gumroad</a>. Your data never touches our servers.
                        </p>
                    </div>
                </div>
            </li>
            <li class="col-12 col-md-6 col-lg-5">
                <div class="card">
                    <div class="card-body">
                        <h6>How do I retrieve a lost license key?</h6>
                        <p>
                            For commercial licenses, please use the <a href="https://gumroad.com/license-key-lookup">license key lookup</a> service. For trial licenses, please send <a href="mailto:support@errata.ai">an email</a> from the address associated with your license.
                        </p>
                    </div>
                </div>
            </li>
            <li class="col-12 col-md-6 col-lg-5">
                <div class="card">
                    <div class="card-body">
                        <h6>What are the system requirements?</h6>
                        <ul>
                            <li><b>macOS</b>: Sierra 10.12 and newer releases are supported.</li>
                            <li><b>Windows</b>: Windows 10 (64-bit) systems are supported.</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="col-12 col-md-6 col-lg-5">
                <div class="card">
                    <div class="card-body">
                        <h6>Do you offer bulk or organization discounts?</h6>
                        <p>
                            Yes, there are multiple <a href="https://gum.co/tfzHE">license types</a> available.
                        </p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="row justify-content-center text-center section-outro">
            <div class="col-lg-4 col-md-5">
                <h6>Did we miss something?</h6>
                <p>Feel free to drop us a line with any further questions.</p>
                <a href="mailto:support@errata.ai">Get in touch &rsaquo;</a>
            </div>
        </div>
    </div>
</section>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Vale Server Trial Download</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="trial">
          <div class="form-group row">
            <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input id="exampleInputEmail1" type="email" name="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" required>
            </div>
          </div>
          <fieldset class="form-group">
            <div class="row">
              <label class="col-sm-2 pt-0">Platform</label>
              <div class="col-sm-10">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="mac" value="option1" checked>
                  <label class="form-check-label" for="mac">
                    <i class="fab fa-apple"></i> macOS (10.12+)
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="win" value="option2">
                  <label class="form-check-label" for="win">
                    <i class="fab fa-windows"></i> Windows 10
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <p>
            We'll send you <i>exactly two</i> emails&mdash;the first will include a trial license key and the second will inform you when your license key expires.
          </p>
          <p>See the <a target="_blank" href="https://errata-ai.github.io/vale-server/docs/install">Getting Started Tutorial</a> for installation and usage instructions. If you have any questions or run into any issues, feel free to get in touch via <a target="_blank" href="https://github.com/errata-ai/vale-server/issues">GitHub issues</a> or <a target="_blank" href="mailto:support@errata.ai">email</a>.</p>
          <hr>
          <div class="float-right">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button id="download-submit" type="submit" class="btn btn-success">Download</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
