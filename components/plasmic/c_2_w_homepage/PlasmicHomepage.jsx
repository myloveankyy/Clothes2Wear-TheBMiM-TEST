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
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";
import CategoryBtn from "../../CategoryBtn"; // plasmic-import: KsTMFzra88PP/component
import { useScreenVariants as useScreenVariantsjnMzM2S33Dx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JnMzM2_S33Dx/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 8ozBW4uAVqTFB3X2H9YHuB/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: YXVm4dGfJVV4/css
import CameraSolidSvgIcon from "./icons/PlasmicIcon__CameraSolidSvg"; // plasmic-import: 2DRO3PAh9L7F/icon
import MagnifyingGlassSolidSvgIcon from "./icons/PlasmicIcon__MagnifyingGlassSolidSvg"; // plasmic-import: 9uZ-rPKtEKrQ/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: xvMWbsHhzlxE/icon

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
        path: "searchTextbox.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.homePage
          )}
        >
          <header
            data-plasmic-name={"headerSection"}
            data-plasmic-override={overrides.headerSection}
            className={classNames(projectcss.all, sty.headerSection)}
          >
            <main
              data-plasmic-name={"main"}
              data-plasmic-override={overrides.main}
              className={classNames(projectcss.all, sty.main)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__pbyBh)}>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__dju1X
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <CameraSolidSvgIcon
                    className={classNames(projectcss.all, sty.svg__bEzn)}
                    role={"img"}
                  />
                </PlasmicLink__>
                <Fetcher
                  data-plasmic-name={"dataFetcher5"}
                  data-plasmic-override={overrides.dataFetcher5}
                  className={classNames("__wab_instance", sty.dataFetcher5)}
                  dataOp={{
                    sourceId: "cbwfjoUNWks1Vu8onJKXx8",
                    opId: "84f60dfa-f162-41fd-9e42-9605189b237d",
                    userArgs: {},
                    cacheKey: `plasmic.$.lD4bcVrXLTop.$.84f60dfa-f162-41fd-9e42-9605189b237d.$.`,
                    invalidatedKeys: null,
                    roleId: null
                  }}
                  queries={{}}
                >
                  {$queries => (
                    <input
                      data-plasmic-name={"searchTextbox"}
                      data-plasmic-override={overrides.searchTextbox}
                      className={classNames(
                        projectcss.all,
                        projectcss.input,
                        sty.searchTextbox
                      )}
                      onChange={e => {
                        generateStateOnChangeProp($state, [
                          "searchTextbox",
                          "value"
                        ])(e.target.value);
                      }}
                      placeholder={"Search anything here..."}
                      ref={ref => {
                        $refs["searchTextbox"] = ref;
                      }}
                      type={"text"}
                      value={
                        generateStateValueProp($state, [
                          "searchTextbox",
                          "value"
                        ]) ?? ""
                      }
                    />
                  )}
                </Fetcher>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___7Xygp
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <MagnifyingGlassSolidSvgIcon
                    className={classNames(projectcss.all, sty.svg__fXW)}
                    role={"img"}
                  />
                </PlasmicLink__>
              </div>
              <section
                className={classNames(projectcss.all, sty.section__js8ZG)}
              >
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
              </section>
              <section
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
                        <PlasmicLink__
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.link___5BiL
                          )}
                          component={Link}
                          key={currentIndex}
                          platform={"nextjs"}
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
                        </PlasmicLink__>
                      );
                    })
                  }
                </Fetcher>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__tz94
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
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
                </PlasmicLink__>
              </section>
            </main>
            <section className={classNames(projectcss.all, sty.section__nLAeP)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"categoryStack"}
                data-plasmic-override={overrides.categoryStack}
                hasGap={true}
                className={classNames(projectcss.all, sty.categoryStack)}
              >
                <Fetcher
                  data-plasmic-name={"dataFetcher"}
                  data-plasmic-override={overrides.dataFetcher}
                  className={classNames("__wab_instance", sty.dataFetcher)}
                  dataOp={{
                    sourceId: "bQuZs1RaGGXQ9YtwVrdvLX",
                    opId: "fa535e4b-76b4-4cca-8dbd-9aea92b7208b",
                    userArgs: {},
                    cacheKey: `plasmic.$.XDR5cdeO1LGi.$.fa535e4b-76b4-4cca-8dbd-9aea92b7208b.$.`,
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
                        <CategoryBtn
                          data-plasmic-name={"categoryBtn"}
                          data-plasmic-override={overrides.categoryBtn}
                          className={classNames(
                            "__wab_instance",
                            sty.categoryBtn
                          )}
                          currentItem={currentItem}
                          key={currentIndex}
                        />
                      );
                    })
                  }
                </Fetcher>
              </Stack__>
            </section>
          </header>
          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__jKUyH)}
          >
            <Fetcher
              data-plasmic-name={"dataFetcher4"}
              data-plasmic-override={overrides.dataFetcher4}
              className={classNames("__wab_instance", sty.dataFetcher4)}
              dataOp={{
                sourceId: "99N6hBZLoErMJ9i1jaGsZy",
                opId: "a75405e4-7574-44e7-addc-7563e8ebc372",
                userArgs: {},
                cacheKey: `plasmic.$.OftkyEXbmvzn.$.a75405e4-7574-44e7-addc-7563e8ebc372.$.`,
                invalidatedKeys: null,
                roleId: null
              }}
              queries={{}}
            >
              {$queries =>
                (_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                  (() => {
                    try {
                      return $queries.data.data.response.showcases;
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
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__xEq08
                      )}
                      component={Link}
                      key={currentIndex}
                      platform={"nextjs"}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__fVWqi)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={(() => {
                          try {
                            return currentItem.imageUrl;
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
                          sty.freeBox___7JwL4
                        )}
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
                                return currentItem.title;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "Ankyy";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </h1>
                      </div>
                    </PlasmicLink__>
                  );
                })
              }
            </Fetcher>
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  homePage: [
    "homePage",
    "headerSection",
    "main",
    "dataFetcher5",
    "searchTextbox",
    "buttonSections",
    "dataFetcher2",
    "categoryStack",
    "dataFetcher",
    "categoryBtn",
    "dataFetcher4",
    "h1"
  ],

  headerSection: [
    "headerSection",
    "main",
    "dataFetcher5",
    "searchTextbox",
    "buttonSections",
    "dataFetcher2",
    "categoryStack",
    "dataFetcher",
    "categoryBtn"
  ],

  main: [
    "main",
    "dataFetcher5",
    "searchTextbox",
    "buttonSections",
    "dataFetcher2"
  ],

  dataFetcher5: ["dataFetcher5", "searchTextbox"],
  searchTextbox: ["searchTextbox"],
  buttonSections: ["buttonSections", "dataFetcher2"],
  dataFetcher2: ["dataFetcher2"],
  categoryStack: ["categoryStack", "dataFetcher", "categoryBtn"],
  dataFetcher: ["dataFetcher", "categoryBtn"],
  categoryBtn: ["categoryBtn"],
  dataFetcher4: ["dataFetcher4", "h1"],
  h1: ["h1"]
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
    main: makeNodeComponent("main"),
    dataFetcher5: makeNodeComponent("dataFetcher5"),
    searchTextbox: makeNodeComponent("searchTextbox"),
    buttonSections: makeNodeComponent("buttonSections"),
    dataFetcher2: makeNodeComponent("dataFetcher2"),
    categoryStack: makeNodeComponent("categoryStack"),
    dataFetcher: makeNodeComponent("dataFetcher"),
    categoryBtn: makeNodeComponent("categoryBtn"),
    dataFetcher4: makeNodeComponent("dataFetcher4"),
    h1: makeNodeComponent("h1"),
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
