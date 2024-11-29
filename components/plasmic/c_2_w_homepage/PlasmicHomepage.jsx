// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8ozBW4uAVqTFB3X2H9YHuB
// Component: YXVm4dGfJVV4
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";
import CategoryBtns from "../../CategoryBtns"; // plasmic-import: pPq4CajPrBm0/component
import Button from "../../Button"; // plasmic-import: AKPym4eRpe9r/component
import Drawer2 from "../../Drawer2"; // plasmic-import: JXMqttZtFxxW/component
import { useScreenVariants as useScreenVariantsjnMzM2S33Dx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JnMzM2_S33Dx/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 8ozBW4uAVqTFB3X2H9YHuB/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: YXVm4dGfJVV4/css
import CameraSolidSvgIcon from "./icons/PlasmicIcon__CameraSolidSvg"; // plasmic-import: 2DRO3PAh9L7F/icon
import MagnifyingGlassSolidSvgIcon from "./icons/PlasmicIcon__MagnifyingGlassSolidSvg"; // plasmic-import: 9uZ-rPKtEKrQ/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: xvMWbsHhzlxE/icon
import BarsSolidSvgIcon from "./icons/PlasmicIcon__BarsSolidSvg"; // plasmic-import: C1Z5uhZlxjTV/icon

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "drawer2.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjnMzM2S33Dx()
  });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"homePage"}
          data-plasmic-override={overrides.homePage}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.homePage
          )}
        >
          <section
            data-plasmic-name={"headerSection"}
            data-plasmic-override={overrides.headerSection}
            className={classNames(projectcss.all, sty.headerSection)}
          >
            <header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames(projectcss.all, sty.header)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__pbyBh)}>
                <CameraSolidSvgIcon
                  className={classNames(projectcss.all, sty.svg__bEzn)}
                  role={"img"}
                />

                <input
                  data-plasmic-name={"searchTextbox"}
                  data-plasmic-override={overrides.searchTextbox}
                  className={classNames(
                    projectcss.all,
                    projectcss.input,
                    sty.searchTextbox
                  )}
                  placeholder={(() => {
                    try {
                      return undefined;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()}
                  ref={ref => {
                    $refs["searchTextbox"] = ref;
                  }}
                  type={"text"}
                />

                <MagnifyingGlassSolidSvgIcon
                  className={classNames(projectcss.all, sty.svg__fXW)}
                  role={"img"}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__js8ZG)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__vwfFd)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"293px"}
                  loading={"eager"}
                  src={{
                    src: "/plasmic/c_2_w_homepage/images/c2WFullPng.png",
                    fullWidth: 1280,
                    fullHeight: 250,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div
                data-plasmic-name={"buttonSections"}
                data-plasmic-override={overrides.buttonSections}
                className={classNames(projectcss.all, sty.buttonSections)}
              >
                <Fetcher
                  data-plasmic-name={"dataFetcher2"}
                  data-plasmic-override={overrides.dataFetcher2}
                  className={classNames("__wab_instance", sty.dataFetcher2)}
                  dataOp={{
                    sourceId: "wJJYKRKmy66qLjpwedisBb",
                    opId: "36380aa0-8960-4d31-80ef-b1ff0c4cbd70",
                    userArgs: {},
                    cacheKey: `plasmic.$.Ac9SNEo-hsSl.$.36380aa0-8960-4d31-80ef-b1ff0c4cbd70.$.`,
                    invalidatedKeys: null,
                    roleId: null
                  }}
                  queries={{}}
                >
                  {$queries =>
                    (_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $queries.data.data.response;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___5BiL
                          )}
                          key={currentIndex}
                        >
                          <PlasmicImg__
                            alt={""}
                            className={classNames(sty.img__jzr3Q)}
                            displayHeight={"18px"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"100%"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"auto"}
                            loading={"lazy"}
                            src={(() => {
                              try {
                                return currentItem.iconUrl;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })()}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__ea19V
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.name;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "Favorite";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </div>
                      );
                    })
                  }
                </Fetcher>
                <div className={classNames(projectcss.all, sty.freeBox__tz94)}>
                  <Icon11Icon
                    className={classNames(projectcss.all, sty.svg___9ICnB)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fiAjX
                    )}
                  >
                    {"My Account"}
                  </div>
                </div>
              </div>
            </header>
            <div className={classNames(projectcss.all, sty.freeBox__nLAeP)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"categoryStack"}
                data-plasmic-override={overrides.categoryStack}
                hasGap={true}
                className={classNames(projectcss.all, sty.categoryStack)}
              >
                <CategoryBtns
                  className={classNames(
                    "__wab_instance",
                    sty.categoryBtns__yybbB
                  )}
                />

                <CategoryBtns
                  className={classNames(
                    "__wab_instance",
                    sty.categoryBtns__eQdnd
                  )}
                />

                <CategoryBtns
                  className={classNames(
                    "__wab_instance",
                    sty.categoryBtns__rvuwn
                  )}
                />

                <CategoryBtns
                  className={classNames(
                    "__wab_instance",
                    sty.categoryBtns__lcsEc
                  )}
                />

                <CategoryBtns
                  className={classNames(
                    "__wab_instance",
                    sty.categoryBtns__rEq8W
                  )}
                />

                <CategoryBtns
                  className={classNames(
                    "__wab_instance",
                    sty.categoryBtns__iP4Q6
                  )}
                />

                <CategoryBtns
                  className={classNames(
                    "__wab_instance",
                    sty.categoryBtns__imMeF
                  )}
                />

                <CategoryBtns
                  className={classNames(
                    "__wab_instance",
                    sty.categoryBtns__h3Ns
                  )}
                />

                <Fetcher
                  data-plasmic-name={"dataFetcher"}
                  data-plasmic-override={overrides.dataFetcher}
                  className={classNames("__wab_instance", sty.dataFetcher)}
                  queries={{}}
                >
                  {$queries =>
                    (_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $queries.data.data.response;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <div
                          data-plasmic-name={"categoryBtn"}
                          data-plasmic-override={overrides.categoryBtn}
                          className={classNames(
                            projectcss.all,
                            sty.categoryBtn
                          )}
                          key={currentIndex}
                        >
                          <h1
                            data-plasmic-name={"h1"}
                            data-plasmic-override={overrides.h1}
                            className={classNames(
                              projectcss.all,
                              projectcss.h1,
                              projectcss.__wab_text,
                              sty.h1
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.name;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "MEN";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </h1>
                        </div>
                      );
                    })
                  }
                </Fetcher>
              </Stack__>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__hECm)}>
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
                color={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "clear"
                    : undefined
                }
              >
                <Drawer2
                  data-plasmic-name={"drawer2"}
                  data-plasmic-override={overrides.drawer2}
                  className={classNames("__wab_instance", sty.drawer2)}
                  onOpenChange={generateStateOnChangeProp($state, [
                    "drawer2",
                    "open"
                  ])}
                  open={generateStateValueProp($state, ["drawer2", "open"])}
                  trigger={
                    <React.Fragment>
                      <BarsSolidSvgIcon
                        className={classNames(projectcss.all, sty.svg___1FWi)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__trUd2
                        )}
                      >
                        {"Show dialog"}
                      </div>
                    </React.Fragment>
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__seJdx
                    )}
                  >
                    {"CLOTHES2WEAR"}
                  </div>
                </Drawer2>
              </Button>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__j56Mu)}
                displayHeight={"29px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"159px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/c_2_w_homepage/images/c2WFullPng.png",
                  fullWidth: 1280,
                  fullHeight: 250,
                  aspectRatio: undefined
                }}
              />

              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___7XupN)}
              >
                <Fetcher
                  data-plasmic-name={"dataFetcher3"}
                  data-plasmic-override={overrides.dataFetcher3}
                  className={classNames("__wab_instance", sty.dataFetcher3)}
                  dataOp={{
                    sourceId: "cbwfjoUNWks1Vu8onJKXx8",
                    opId: "84f60dfa-f162-41fd-9e42-9605189b237d",
                    userArgs: {},
                    cacheKey: `plasmic.$.F4R7CCus8aTT.$.84f60dfa-f162-41fd-9e42-9605189b237d.$.`,
                    invalidatedKeys: null,
                    roleId: null
                  }}
                  queries={{}}
                >
                  {$queries =>
                    (_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $queries.data.data.response;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <PlasmicImg__
                          alt={""}
                          className={classNames(sty.img__rn7GP)}
                          displayHeight={"20px"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"auto"}
                          key={currentIndex}
                          loading={"lazy"}
                          src={(() => {
                            try {
                              return currentItem.iconUrl;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />
                      );
                    })
                  }
                </Fetcher>
              </Stack__>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  homePage: [
    "homePage",
    "headerSection",
    "header",
    "searchTextbox",
    "buttonSections",
    "dataFetcher2",
    "categoryStack",
    "dataFetcher",
    "categoryBtn",
    "h1",
    "button",
    "drawer2",
    "dataFetcher3"
  ],

  headerSection: [
    "headerSection",
    "header",
    "searchTextbox",
    "buttonSections",
    "dataFetcher2",
    "categoryStack",
    "dataFetcher",
    "categoryBtn",
    "h1",
    "button",
    "drawer2",
    "dataFetcher3"
  ],

  header: ["header", "searchTextbox", "buttonSections", "dataFetcher2"],
  searchTextbox: ["searchTextbox"],
  buttonSections: ["buttonSections", "dataFetcher2"],
  dataFetcher2: ["dataFetcher2"],
  categoryStack: ["categoryStack", "dataFetcher", "categoryBtn", "h1"],
  dataFetcher: ["dataFetcher", "categoryBtn", "h1"],
  categoryBtn: ["categoryBtn", "h1"],
  h1: ["h1"],
  button: ["button", "drawer2"],
  drawer2: ["drawer2"],
  dataFetcher3: ["dataFetcher3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "homePage") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("homePage"),
  {
    // Helper components rendering sub-elements
    headerSection: makeNodeComponent("headerSection"),
    header: makeNodeComponent("header"),
    searchTextbox: makeNodeComponent("searchTextbox"),
    buttonSections: makeNodeComponent("buttonSections"),
    dataFetcher2: makeNodeComponent("dataFetcher2"),
    categoryStack: makeNodeComponent("categoryStack"),
    dataFetcher: makeNodeComponent("dataFetcher"),
    categoryBtn: makeNodeComponent("categoryBtn"),
    h1: makeNodeComponent("h1"),
    button: makeNodeComponent("button"),
    drawer2: makeNodeComponent("drawer2"),
    dataFetcher3: makeNodeComponent("dataFetcher3"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */