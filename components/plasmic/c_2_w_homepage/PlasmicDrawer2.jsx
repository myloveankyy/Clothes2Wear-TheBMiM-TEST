// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8ozBW4uAVqTFB3X2H9YHuB
// Component: JXMqttZtFxxW
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Dialog } from "@plasmicpkgs/radix-ui";
import Button from "../../Button"; // plasmic-import: AKPym4eRpe9r/component
import { SheetContent } from "@plasmicpkgs/radix-ui";
import { DialogTitle } from "@plasmicpkgs/radix-ui";
import { DialogClose } from "@plasmicpkgs/radix-ui";
import { useScreenVariants as useScreenVariantsjnMzM2S33Dx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: JnMzM2_S33Dx/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 8ozBW4uAVqTFB3X2H9YHuB/projectcss
import sty from "./PlasmicDrawer2.module.css"; // plasmic-import: JXMqttZtFxxW/css
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 2KC2rHpS0QCH/icon
import CircleUserSolidSvgIcon from "./icons/PlasmicIcon__CircleUserSolidSvg"; // plasmic-import: qw4vxLtg7u2Z/icon
import HeartSolidSvgIcon from "./icons/PlasmicIcon__HeartSolidSvg"; // plasmic-import: iNoA6wFkTEbi/icon

createPlasmicElementProxy;

export const PlasmicDrawer2__VariantProps = new Array("noTrigger");

export const PlasmicDrawer2__ArgProps = new Array(
  "open",
  "onOpenChange",
  "children",
  "slot",
  "trigger"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDrawer2__RenderFunc(props) {
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
        path: "dialog.open",
        type: "writable",
        variableType: "boolean",
        valueProp: "open",
        onChangeProp: "onOpenChange"
      },
      {
        path: "noTrigger",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTrigger
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
    <Dialog
      data-plasmic-name={"dialog"}
      data-plasmic-override={overrides.dialog}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.dialog,
        { [sty.dialognoTrigger]: hasVariant($state, "noTrigger", "noTrigger") }
      )}
      defaultOpen={
        hasVariant(globalVariants, "screen", "mobileOnly") ? false : false
      }
      noContain={true}
      onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
      open={generateStateValueProp($state, ["dialog", "open"])}
      overlayClassName={classNames({ [sty["pcls_C2Ayy41_cPMP"]]: true })}
      themeResetClass={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens
      )}
      triggerSlot={
        (hasVariant($state, "noTrigger", "noTrigger") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <Button
                    className={classNames("__wab_instance", sty.button__xzZsR)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__o8W6
                      )}
                    >
                      {"Show dialog"}
                    </div>
                  </Button>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fUuIr
                    )}
                  >
                    {"Enter some text"}
                  </div>
                </React.Fragment>
              ),

              value: args.trigger
            })
          : null
      }
    >
      <SheetContent
        data-plasmic-name={"drawerContent"}
        data-plasmic-override={overrides.drawerContent}
        className={classNames("__wab_instance", sty.drawerContent, {
          [sty.drawerContentnoTrigger]: hasVariant(
            $state,
            "noTrigger",
            "noTrigger"
          )
        })}
        themeResetClass={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens
        )}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <DialogTitle
            data-plasmic-name={"dialogTitle"}
            data-plasmic-override={overrides.dialogTitle}
            className={classNames("__wab_instance", sty.dialogTitle)}
          >
            {renderPlasmicSlot({
              defaultContents: "CLOTHES2WEAR",
              value: args.children
            })}
          </DialogTitle>
          {renderPlasmicSlot({
            defaultContents: (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__yWqHe)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cgZge
                  )}
                >
                  {""}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__bdhs4)}>
                  <CircleUserSolidSvgIcon
                    className={classNames(projectcss.all, sty.svg___9GLSz)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qsVeJ
                    )}
                  >
                    {"My account"}
                  </div>
                  <Icon2Icon
                    className={classNames(projectcss.all, sty.svg__a2Ihg)}
                    role={"img"}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox___7SM0)}>
                  <HeartSolidSvgIcon
                    className={classNames(projectcss.all, sty.svg__pB4Lt)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jGyj5
                    )}
                  >
                    {"Favourites"}
                  </div>
                  <Icon2Icon
                    className={classNames(projectcss.all, sty.svg__l6Gdr)}
                    role={"img"}
                  />
                </div>
              </Stack__>
            ),

            value: args.slot
          })}
        </Stack__>
        <DialogClose
          data-plasmic-name={"dialogClose"}
          data-plasmic-override={overrides.dialogClose}
          className={classNames("__wab_instance", sty.dialogClose)}
        />
      </SheetContent>
    </Dialog>
  );
}

const PlasmicDescendants = {
  dialog: ["dialog", "drawerContent", "freeBox", "dialogTitle", "dialogClose"],
  drawerContent: ["drawerContent", "freeBox", "dialogTitle", "dialogClose"],
  freeBox: ["freeBox", "dialogTitle"],
  dialogTitle: ["dialogTitle"],
  dialogClose: ["dialogClose"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDrawer2__ArgProps,
          internalVariantPropNames: PlasmicDrawer2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDrawer2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dialog") {
    func.displayName = "PlasmicDrawer2";
  } else {
    func.displayName = `PlasmicDrawer2.${nodeName}`;
  }
  return func;
}

export const PlasmicDrawer2 = Object.assign(
  // Top-level PlasmicDrawer2 renders the root element
  makeNodeComponent("dialog"),
  {
    // Helper components rendering sub-elements
    drawerContent: makeNodeComponent("drawerContent"),
    freeBox: makeNodeComponent("freeBox"),
    dialogTitle: makeNodeComponent("dialogTitle"),
    dialogClose: makeNodeComponent("dialogClose"),
    // Metadata about props expected for PlasmicDrawer2
    internalVariantProps: PlasmicDrawer2__VariantProps,
    internalArgProps: PlasmicDrawer2__ArgProps
  }
);

export default PlasmicDrawer2;
/* prettier-ignore-end */
